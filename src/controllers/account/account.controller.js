const { sendOtpOnMail } = require("../../utils/nodemailer");
const { generateOTP } = require("../../utils/otp.genrate");
const { selectQuery } = require("../../models/employee.model");
const { createToken } = require("../../utils/jwt");


const mainView = async (req, res, next) => {
  res.render('account')
}

const otpStorage = {};

const loginView = async (req, res, next) => {

  let CheckEmployee = await selectQuery(req.query);

  if (CheckEmployee.length == 0) {
    return res.redirect('/account')
  }
  
  //OTP SEND 
  let otp = generateOTP();
  await sendOtpOnMail(req.query.email, otp);
  otpStorage['otp'] = otp;

  //TOKEN SAVE
  let token = createToken(req.query);
  const expiryTimeInMilliseconds = 1 * 24 * 60 * 60 * 1000;  // for 1 day

  res.cookie('token', token, { expires: new Date(Date.now() + expiryTimeInMilliseconds), httpOnly: true });
  return res.render('otp')
}

const otpSubmitView = async (req, res, next) => {
  let userOTP = req.query.digit_1 + req.query.digit_2 + req.query.digit_3 + req.query.digit_4;
  const storedOTP = otpStorage['otp'];

  if (storedOTP === userOTP) {
    res.redirect('/kyc')
  } else {
    console.log('you pass wrong otp!');
    res.redirect('/account');
  }
}

module.exports = {
  mainView,
  loginView,
  otpSubmitView
}