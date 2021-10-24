const models = require("../../models");
const expressJwt = require("express-jwt");

const { forgotPassword } = require('./forgotPassword');
const { preRegister } = require('./preRegister');
const { resetPassword } = require('./resetPassword');
const { login } = require('./login');
const { logout } = require('./logout');
const { register } = require('./register');
const { adminMiddleware } = require('./adminMiddleware');

const requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],  // req.user
});

const authMiddleware = (req, res, next) => {
    const { email } = req.body.user;
    models.User
        .findOne({
            where: { email: email },
        })
        .then((user) => {
            if (!user) {
                return res.status(400).json({
                    error: "Không tìm thấy người dùng!",
                });
            }
            req.profile = user;
            next();
        });
};

module.exports = {
    forgotPassword,
    preRegister,
    resetPassword,
    register,
    login,
    logout,
    requireSignin,
    authMiddleware,
    adminMiddleware,
}


