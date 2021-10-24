const { check } = require('express-validator');

exports.createCategoryValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Tên loại không được để trống.'),
    check('description')
        .not()
        .isEmpty()
        .withMessage('Mô tả không được để trống.')
];
