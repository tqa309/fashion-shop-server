const jwt = require("jsonwebtoken");

exports.logout = (req, res) => {
    try {
        const { token } = req.body;

        if (token) {
            jwt.verify(
                token,
                process.env.JWT_SECRET,
                function (err, decoded) {
                    if (err) {
                        return res.status(400).json({
                            error: "Có lỗi xảy ra! Vui lòng thử lại."
                        });
                    }
                    return res.clearCookie("token").status(200).json({
                        message: "Đăng xuất thành công.",
                    });
                }
            );
        } else {
            return res.status(401).json({
                error: "Có lỗi xảy ra! Vui lòng thử lại.",
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(402).json(error);
    }
};
