const { selectQueryAW, selectFromAWSM } = require("../../models/kyc.model");

const kycDetailsView = async (req, res, next) => {
  let AWSMList = await selectFromAWSM();
  let AWList = await selectQueryAW();
  res.render('kyc', { aw: AWList, awsm: AWSMList });
}


module.exports = {
  kycDetailsView
}