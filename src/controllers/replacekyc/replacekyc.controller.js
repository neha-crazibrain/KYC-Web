const { selectQuery, selectFromEmployee } = require("../../models/kyc.model");

const replaceKycView = async (req, res, next) => {
  let AWSMList = await selectFromEmployee();
  let AWList = await selectQuery();
  res.render('replacekyc', { aw: AWList, awsm: AWSMList })
}

module.exports = {
  replaceKycView
}