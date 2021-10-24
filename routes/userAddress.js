const express = require("express");
const router = express.Router();
const { create } = require('../controllers/userAddress');

router.post('/userAddress', create);

module.exports = router;
