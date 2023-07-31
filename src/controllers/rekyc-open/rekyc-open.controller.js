const { selecKycByAWSM } = require("../../models/kyc.model");


const rekycOpenView = async (req, res, next) => {
  // let cardsData = await selecKycByAWSM(req.query.awsm_id);
  console.log(req.query, req.params,  "******************cardsData open*****************");
  res.render('rekyc-open')
}

module.exports = {
  rekycOpenView
}