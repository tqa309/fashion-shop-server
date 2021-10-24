const models = require("../models");

exports.create = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        await models.User.create({
            name: name,
            password: password,
            email: email,
        });

        return res.status(200).json({
            message: "Tạo tài khoản thành công!",
        });
    } catch (error) {
        return res.status(402).json(error);
    }
};

exports.remove = async (req, res) => {
    try {
        const { id } = req.body;

        const user = await models.User.findOne({
            where: {
                id: id,
            },
        });

        await user.destroy();

        return res.status(202).json({
            message: "Xóa người dùng thành công.",
        });
    } catch (error) {
        return res.status(401).json(error);
    }
};
