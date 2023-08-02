const { selectQueryAW, selectFromAWSM } = require("../../models/kyc.model");

const replaceKycView = async (req, res, next) => {
  let AWSMList = await selectFromAWSM();
  let AWList = await selectQueryAW();
  res.render('replacekyc', { aw: AWList, awsm: AWSMList })
}

module.exports = {
  replaceKycView
}