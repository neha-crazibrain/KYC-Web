const express = require('express');
const authenticationController = require("../../controllers/authentication/authentication.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, authenticationController.authenticationView);

module.exports = router;