const models = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.resetPassword = (req, res) => {
    try {
        const { password, token } = req.body;

        if (token) {
            jwt.verify(
                token,
                process.env.JWT_RESET_PASSWORD,
                function (err, decoded) {
                    if (err) {
                        return res.status(401).json({
                            error: "Link đã hết hạn. Vui lòng yêu cầu lại.",
                        });
                    }

                    const saltRounds = 6;

                    bcrypt.hash(password, saltRounds, async (err, passHash) => {
                        try {
                            const { email } = jwt.decode(token);

                            const user = await models.User.findOne({
                                where: { email: email },
                            });

                            user.modified_at = new Date();
                            user.password = passHash;

                            await user.save();

                            return res.status(200).json({
                                message:
                                    "Mật khẩu thay đổi thành công. Vui lòng đăng nhập.",
                            });
                        } catch (error) {
                            return res.status(402).json(error);
                        }
                    });
                }
            );
        } else {
            return res.status(402).json({
                error: "Có lỗi xảy ra! Vui lòng thử lại.",
            });
        }
    } catch (error) {
        return res.status(402).json(error);
    }
};
