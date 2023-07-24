const jwt = require('jsonwebtoken');
const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY;
const TOKEN_EXSPIRESIN = process.env.TOKEN_EXSPIRESIN;


const createToken = (userData) => {
  const token = jwt.sign(
    { userData },
    TOKEN_SECRET_KEY,
    {
      expiresIn: TOKEN_EXSPIRESIN,
    }
  );
  return token;
}

module.exports = { createToken }