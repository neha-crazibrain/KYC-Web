const express = require('express');
const rekycController = require("../../controllers/rekyc/rekyc.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, rekycController.rekycView);


module.exports = router;