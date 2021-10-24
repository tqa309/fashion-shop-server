const { check } = require("express-validator");

exports.userRegisterValidator = [
  check("name").not().isEmpty().withMessage("Tên không được để trống."),
  check("email").isEmail().withMessage("Email không hợp lệ."),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Mật khẩu phải dài tối thiểu 8 ký tự."),
];

exports.userLoginValidator = [
  check("email").isEmail().withMessage("Email không hợp lệ."),
  check("password")
    .isLength({ min: 4 })
    .withMessage("Mật khẩu phải dài tối thiểu 8 ký tự."),
];

exports.forgotPasswordValidator = [
  check("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Email không hợp lệ."),
];

exports.resetPasswordValidator = [
  check("password")
    .not()
    .isEmpty()
    .isLength({ min: 8 })
    .withMessage("Mật khẩu phải dài tối thiểu 8 ký tự."),
];
