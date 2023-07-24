const express = require('express');
const awsmDetailController = require("../../controllers/awsm-details/awsm-details.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, awsmDetailController.awsmDetailsView);

module.exports = router;