const conn = require('../config/db');

const selectQuery = async (data) => {
  let query = `SELECT * FROM employee WHERE email = '${data.email}'`;
  return new Promise((resolve, reject) => {
    conn.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

module.exports = { selectQuery }