const connection = require('../database/connection');
const IngredientController = require('./IngredientController');
const PizzaIngredientController = require('./PizzaIngredientController');

module.exports = {
  async index(req, res) {
    const pizzas = await connection
      .promise()
      .query('SELECT * FROM pizzas')
      .then(([results]) => results)
      .catch((err) => console.log(err.code));

    const pizzasWithIngredients = await Promise.all(
      pizzas.map(async (pizza) => {
        const ingredients = await connection
          .promise()
          .query(
            'SELECT ingredients.name FROM pizza_ingredient INNER JOIN ingredients ON ingredients.id = pizza_ingredient.ingredient_id WHERE pizza_id = ?',
            [pizza.id]
          )
          .then(([results]) => results)
          .catch((err) => console.log(err));

        pizza['ingredients'] = ingredients.map((ingredient) => ingredient.name);
        return pizza;
      })
    );

    return res.json(pizzasWithIngredients);
  },

  async store(req, res) {
    const { name, price, ingredients } = req.body;

    const [pizza] = await connection
      .promise()
      .query('SELECT * FROM pizzas WHERE name = ?', [name])
      .then(([result]) => result)
      .catch((err) => console.log(err.code));

    if (pizza) return res.json({ info: 'Pizza already exists!', pizza });

    const pizzaId = await connection
      .promise()
      .query('INSERT INTO pizzas VALUES (DEFAULT, ?, ?)', [name, price])
      .then(([result]) => result.insertId)
      .catch((err) => console.log(err.code));

    const ingredientsIds = await Promise.all(
      ingredients.map(async (ingredient) => {
        return await IngredientController.store(ingredient);
      })
    );

    await Promise.all(
      ingredientsIds.map(async (ingredientId) => {
        return await PizzaIngredientController.store(pizzaId, ingredientId);
      })
    );

    return res.status(201).json();
  },
};
