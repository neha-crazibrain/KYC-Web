const conn = require('../config/db');

const insertQuery = async (data) => {
  let query = `INSERT INTO users (email, token) VALUES ( '${data.email}', '${data.token}')`;
  return new Promise((resolve, reject) => {
    conn.query(query, (error, employees) => {
      if (error) {
        return reject(error);
      }
      return resolve(employees);
    });
  });
}

const selectQueryByToken = async (token) => {
  return new Promise((resolve, reject) => {
    conn.query('SELECT * FROM users WHERE token =?', token, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    })
  })
}

const selectQuery = async (data) => {
  let query = `SELECT * FROM users WHERE email = '${data.email}'`;
  return new Promise((resolve, reject) => {
    conn.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}


const updateQuery = async (data) => {
  let token = data.token;
  return new Promise((resolve, reject) => {
    let query = `UPDATE users SET ? WHERE email =?`;
    conn.query(query, [{ token: token }, `${data.email}`], (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    })
  })
}


module.exports = { insertQuery, selectQuery, updateQuery, selectQueryByToken }