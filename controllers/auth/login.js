const models = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await models.User.findOne({
            where: { email: email },
        });

        if (!user) {
            return res.status(400).json({
                error: "Email chưa được đăng ký!",
            });
        }

        // authenticate
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                error: "Email và mật khẩu không trùng khớp",
            });
        }

        // generate a token and send to client
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.cookie("token", token, { expiresIn: "1d" });
        const { id, name, role } = user;

        return res.status(201).json({
            token,
            user: { id, name, email, role },
        });
    } catch (error) {
        return res.status(402).json(error);
    }
};
