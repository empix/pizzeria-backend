const connection = require('../database/connection');

module.exports = {
  async store(ingredient) {
    const [isInDB] = await connection
      .promise()
      .query('SELECT * FROM ingredients WHERE name = ?', [ingredient])
      .then(([result]) => result)
      .catch((err) => console.log(err.code));

    if (isInDB) return isInDB.id;

    return await connection
      .promise()
      .query('INSERT INTO ingredients VALUES (DEFAULT, ?)', [ingredient])
      .then(([results]) => results.insertId)
      .catch((err) => console.log(err.code));
  },
};
