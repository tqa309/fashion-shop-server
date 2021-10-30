const express = require("express");
const router = express.Router();
const {
    preRegister,
    register,
    login,
    logout,
    forgotPassword,
    resetPassword,
} = require("../controllers/auth");

const { runValidation } = require("../validators");

const {
    userRegisterValidator,
    userLoginValidator,
    forgotPasswordValidator,
    resetPasswordValidator,
} = require("../validators/auth");

router.post(
    "/auth/preRegister",
    userRegisterValidator,
    runValidation,
    preRegister
);

router.post("/auth/register", register);

router.post("/auth/login",
    login
);

router.post("/auth/logout", logout);

router.post(
    "/auth/forgotPassword",
    forgotPasswordValidator,
    runValidation,
    forgotPassword
);

router.post(
    "/auth/resetPassword",
    resetPasswordValidator,
    runValidation,
    resetPassword
);

module.exports = router;
