const conn = require('../config/db');

const selectQuery = async (data) => {
  let query = `SELECT * FROM ase_details WHERE ase_email_id = '${data.email}'`;
  return new Promise((resolve, reject) => {
    conn.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

const selectASEByMailId = async (data) => {
  let query = `SELECT * FROM ase_details WHERE ase_email_id = '${data.email}'`;
  return new Promise((resolve, reject) => {
    conn.query(query, (error, result) => {
      if (error) {
        return reject(error)
      }
      return resolve(result);
    });
  })
}

module.exports = { selectQuery, selectASEByMailId }