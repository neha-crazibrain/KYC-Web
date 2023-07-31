const { selectFilterKyc } = require("../../models/kyc.model");


const rekycView = async (req, res, next) => {
  let cardsData = await selectFilterKyc();
  res.render('rekyc', { cardsData: cardsData })
}

module.exports = {
  rekycView
}