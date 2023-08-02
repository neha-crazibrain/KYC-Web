const express = require('express');
const replaceKycDetailsController = require("../../controllers/replacekyc-details/replacekyc-details.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, replaceKycDetailsController.replacekycDetailsView);
router.route('/update').post(auth, replaceKycDetailsController.replacekycUpdate);

module.exports = router;