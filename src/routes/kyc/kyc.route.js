const express = require('express');
const kycController = require("../../controllers/kyc/kyc.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, kycController.kycDetailsView);
router.route('/awsm').get(kycController.getAWSMByfilter);

module.exports = router;