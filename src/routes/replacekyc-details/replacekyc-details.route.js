const express = require('express');
const replaceKycDetailsController = require("../../controllers/replacekyc-details/replacekyc-details.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, replaceKycDetailsController.replacekycDetailsView);

module.exports = router;