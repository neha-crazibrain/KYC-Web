const express = require('express');
const awsmDetailController = require("../../controllers/awsm-details/awsm-details.controller");
const { auth } = require('../../utils/auth');
const uploadMulter = require('../../middleware/upload');

const router = express.Router();

router.route('/').get(auth, awsmDetailController.awsmDetailsView);
router.route('/add').post(auth, uploadMulter, awsmDetailController.addAWSMDetails);

module.exports = router;