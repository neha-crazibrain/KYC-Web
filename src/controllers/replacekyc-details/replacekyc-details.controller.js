const { replacekycModel, selectKycDetail } = require("../../models/kyc.model");
const { insertKycDetailsHistory } = require("../../models/kyc-details-history.model");

const replacekycDetailsView = async (req, res, next) => {
  res.render('replacekyc-details', { data: req.query.awsm_code });
}

const replacekycUpdate = async (req, res) => {
  req.body.awsm_code = req.query.awsm_code;

  let getKycDetail = await selectKycDetail(req.query);

  let insertDataKycDetailsHistory = await insertKycDetailsHistory(getKycDetail[0]);
  let updateReplaceKyc = await replacekycModel(req.body);
  console.log(updateReplaceKyc);
  res.redirect('/replacekyc');
}

module.exports = {
  replacekycDetailsView,
  replacekycUpdate
}