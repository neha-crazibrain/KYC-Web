const { selecKycByAWSM, updateReKycModel } = require("../../models/kyc.model");


const rekycOpenView = async (req, res, next) => {
  let kycData = await selecKycByAWSM(req.query.kyc_id);
  return res.render('rekyc-open', { kycData: kycData[0] });
}

const updateReKyc = async (req, res) => {

  let urlString = req.rawHeaders[33];
  const queryString = urlString.slice(urlString.indexOf('?') + 1);
  const queryParams = queryString.split('&');
  const paramsObject = {};

  queryParams.forEach((param) => {
    const [key, value] = param.split('=');
    paramsObject[key] = value;
  });
  const kycId = paramsObject.kyc_id;
  req.body.kyc_id = kycId;
  let cardsData = await updateReKycModel(req.body);

  return res.redirect("/rekyc");
}

module.exports = {
  rekycOpenView,
  updateReKyc
}