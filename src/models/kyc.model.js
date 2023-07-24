const dbCon = require('../config/db');

const selectQuery = async () => {
  let query = `SELECT * FROM hierarchy`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}


const selectFromEmployee = async () => {
  let query = `SELECT * FROM employee`;
  return new Promise((resolve, reject) => {
    dbCon.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

module.exports = { selectQuery, selectFromEmployee }