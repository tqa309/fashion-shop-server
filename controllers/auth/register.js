const models = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
    try {
        const token = req.body.token;
        if (token) {
            jwt.verify(
                token,
                process.env.JWT_ACCOUNT_ACTIVATION,
                async (err, decoded) => {
                    if (err) {
                        return res.status(401).json({
                            error: "Link đã hết hạn. Vui lòng đăng ký lại.",
                        });
                    }

                    const { name, email, password } = jwt.decode(token);

                    const saltRounds = 6;
                    const passHash = await bcrypt.hash(password, saltRounds);

                    await models.User.create({
                        name: name,
                        password: passHash,
                        email: email,
                        created_at: new Date(),
                    });

                    return res.status(200).json({
                        message: "Kích hoạt tài khoản thành công!",
                    });
                }
            );
        }
    } catch (error) {
        return res.json({
            message: "Có lỗi xảy ra! Vui lòng thử lại.",
        });
    }
};
