const models = require("../models");

exports.create = async (req, res) => {
    try {
        const { user_id, address_line1, city, phone } = req.body;

        await models.UserAddress.create({
            user_id: user_id,
            address_line1: address_line1,
            city: city,
            phone: phone,
        });

        return res.status(200).json({
            message: "Tạo địa chỉ thành công!",
        });
    } catch (error) {
        return res.status(400).json({
            message: "Có lỗi xảy ra! Vui lòng thử lại.",
        });
    }
};
