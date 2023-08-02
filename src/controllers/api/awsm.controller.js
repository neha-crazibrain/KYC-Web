const { selectFilterAWSM } = require("../../models/kyc.model");


const getAWSMByfilter = async (req, res) => {
  let aw_code = req.query.selectedAW;
  let AWSMList = await selectFilterAWSM(aw_code);
  res.send(AWSMList)
}

module.exports = {
  getAWSMByfilter
}