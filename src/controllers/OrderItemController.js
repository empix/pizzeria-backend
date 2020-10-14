const connection = require('../database/connection');

module.exports = {
  async store(pizza_id, order_id, quantity) {
    return await connection
      .promise()
      .query('INSERT INTO order_item VALUES (DEFAULT, ?, ?, ?)', [
        pizza_id,
        order_id,
        quantity,
      ])
      .then(([result]) => result)
      .catch((err) => console.log(err));
  },
};
