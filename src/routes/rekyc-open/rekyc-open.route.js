const express = require('express');
const rekycOpenController = require("../../controllers/rekyc-open/rekyc-open.controller");
const { auth } = require('../../utils/auth');

const router = express.Router();

router.route('/').get(auth, rekycOpenController.rekycOpenView);
router.route('/update').post(rekycOpenController.updateReKyc);


module.exports = router;  