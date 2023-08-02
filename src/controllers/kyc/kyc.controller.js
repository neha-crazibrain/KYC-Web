const { selectQueryAW, selectFromAWSM, selectFilterAWSM } = require("../../models/kyc.model");

const kycDetailsView = async (req, res, next) => {
  let AWSMList = await selectFromAWSM();
  let AWList = await selectQueryAW();
  res.render('kyc', { aw: AWList, awsm: AWSMList });
}

const getAWSMByfilter = async(req, res) => {
  let aw_code = req.query.selectedAW;
  let AWSMList = await selectFilterAWSM(aw_code);
  res.send(AWSMList)
}

module.exports = {
  kycDetailsView,
  getAWSMByfilter
}