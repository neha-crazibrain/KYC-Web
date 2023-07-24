const express = require('express');
const reportController = require("../../controllers/report/report.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, reportController.reportView);

module.exports = router;