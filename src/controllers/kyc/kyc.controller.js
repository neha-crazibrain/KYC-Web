const { selectQueryAW, selectFromEmployee } = require("../../models/kyc.model");

const kycDetailsView = async (req, res, next) => {
  let AWSMList = await selectFromEmployee();
  let AWList = await selectQueryAW();
  res.render('kyc', { aw: AWList, awsm: AWSMList });
}

module.exports = {
  kycDetailsView,
}