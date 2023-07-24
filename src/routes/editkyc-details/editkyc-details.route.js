const express = require('express');
const editkycDetailsController = require("../../controllers/editkyc-details/editkyc-details.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, editkycDetailsController.editkycDetailsView);

module.exports = router;