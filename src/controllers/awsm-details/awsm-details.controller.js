const { insertQuery } = require("../../models/kyc.model");
const { selectASEByMailId } = require("../../models/ase.model");
const jwt = require('jsonwebtoken');

const awsmDetailsView = async (req, res, next) => {
  let data = req.query;
  res.render('awsm-details', { success: req.session.success, data });
  delete req.session.success;
}

const addAWSMDetails = async (req, res, next) => {
  try {
    let token = req.cookies.token;
    const decodedToken = jwt.decode(token);
    req.body.aw_code = req.query.AW;
    req.body.awsm_code = req.query.AWSM;
    req.body.ase_email = decodedToken.userData.email;
    let getASEName = await selectASEByMailId(decodedToken.userData);
    req.body.ase_name = getASEName[0].ase_name;
    req.body.Photo = req.files['Photo'][0].filename;
    req.body.Cheque = req.files['Cheque'][0].filename;
    req.body.PhotoID = req.files['PhotoID'][0].filename;
    let resultDb = await insertQuery(req.body);
    console.log(resultDb, "************************db result************************");
    req.session.success = 'Details has submitted successfully!';
    return res.redirect('/awsm-details');
  }
  catch (error) {
    return res.redirect('/awsm-details');
  }
}

module.exports = {
  awsmDetailsView,
  addAWSMDetails
}