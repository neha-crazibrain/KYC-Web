const { insertQuery } = require("../../models/kyc.model");

const awsmDetailsView = async (req, res, next) => {
  res.render('awsm-details');
}

const addAWSMDetails = async (req, res, next) => {
  try {
    req.body.Photo = req.files['Photo'][0].filename;
    req.body.Cheque = req.files['Cheque'][0].filename;
    req.body.PhotoID = req.files['PhotoID'][0].filename;
    await insertQuery(req.body)
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