const { selectQuery, selectFromEmployee } = require("../../models/kyc.model");

const authenticationView = async (req, res, next) => {
  let AWSMList = await selectFromEmployee();
  let AWList = await selectQuery();
  res.render('authentication', { aw: AWList, awsm: AWSMList })
}

module.exports = {
  authenticationView
}