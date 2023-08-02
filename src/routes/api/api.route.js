const express = require('express');
const apiController = require("../../controllers/api/awsm.controller");


const router = express.Router();

router.route('/awsm').get(apiController.getAWSMByfilter);

module.exports = router;