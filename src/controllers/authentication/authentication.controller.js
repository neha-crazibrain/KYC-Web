const { selectQueryAW, selectFromAWSM } = require("../../models/kyc.model");

const authenticationView = async (req, res, next) => {
  let AWSMList = await selectFromAWSM();
  let AWList = await selectQueryAW();
  res.render('authentication', { aw: AWList, awsm: AWSMList })
}

module.exports = {
  authenticationView
}