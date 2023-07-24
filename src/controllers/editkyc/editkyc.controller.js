const { selectQuery, selectFromEmployee } = require("../../models/kyc.model");

const editkycView = async (req, res, next) => {
  let AWSMList = await selectFromEmployee();
  let AWList = await selectQuery();
  res.render('editkyc', { aw: AWList, awsm: AWSMList });
}

module.exports = {
  editkycView
}