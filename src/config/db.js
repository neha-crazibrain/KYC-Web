"user strict";
const mysql = require("mysql");
const connection =mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "kyc",
});

module.exports = connection;
