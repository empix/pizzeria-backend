const connection = require('../database/connection');

module.exports = {
  async store(pizza_id, ingredient_id) {
    return await connection
      .promise()
      .query('INSERT INTO pizza_ingredient VALUES (DEFAULT, ?, ?)', [
        pizza_id,
        ingredient_id,
      ])
      .then(([result]) => result)
      .catch((err) => console.log(err.code));
  },
};
