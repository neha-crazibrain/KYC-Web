const express = require('express');
const replacekycController = require("../../controllers/replacekyc/replacekyc.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, replacekycController.replaceKycView);

module.exports = router;