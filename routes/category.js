const express = require('express');
const router = express.Router();

const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { create, list, read, remove } = require('../controllers/category');

const { runValidation } = require('../validators');
const { createCategoryValidator } = require('../validators/category');

router.post('/category/create', createCategoryValidator, runValidation, requireSignin, adminMiddleware, create);
router.get('/category/list', list);
router.get('/category/:slug', read);
router.delete('/category/delete/:slug', requireSignin, adminMiddleware, remove);

module.exports = router; 
