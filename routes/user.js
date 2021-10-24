const express = require("express");
const router = express.Router();
const { remove, create } = require('../controllers/user');

router.post('/user', create);
router.delete('/user', remove);

module.exports = router;
