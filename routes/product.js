const express = require("express");
const router = express.Router();
const { create, getAll, getById} = require('../controllers/product');
const { getColors } = require('../controllers/product/product-colors');
const { getSizes } = require('../controllers/product/product-sizes');
const { getTypes } = require('../controllers/product/product-types');

router.post('/product', create);
router.get('/product/:id', getById);
router.get('/products', getAll);
router.get('/product/colors', getColors);
router.get('/product/sizes', getSizes);
router.get('/product/types', getTypes);

module.exports = router;
