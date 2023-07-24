const express = require('express');
const accountController = require("../../controllers/account/account.controller");

const router = express.Router();

router.route('/').get(accountController.mainView);
router.route('/login').get(accountController.loginView);
router.route('/otp-submit').get(accountController.otpSubmitView);

module.exports = router;