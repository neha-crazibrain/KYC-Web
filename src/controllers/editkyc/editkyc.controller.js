const { selectQueryAW, selectFromAWSM } = require("../../models/kyc.model");

const editkycView = async (req, res, next) => {
  let AWSMList = await selectFromAWSM();
  let AWList = await selectQueryAW();
  res.render('editkyc', { aw: AWList, awsm: AWSMList });
}

module.exports = {
  editkycView
}