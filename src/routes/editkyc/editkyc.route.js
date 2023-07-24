const express = require('express');
const editkycController = require("../../controllers/editkyc/editkyc.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, editkycController.editkycView);

module.exports = router;