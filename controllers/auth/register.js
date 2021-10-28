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

                    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
                        expiresIn: "1d",
                    });
                    
            
                    res.cookie("token", token, { expiresIn: "1d" });

                    const user = await models.User.findOne({
                        where: { email: email },
                    });

                    const { id, userName, role } = user;
            
                    return res.status(201).json({
                        token,
                        user: { id, name: userName, email, role },
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
