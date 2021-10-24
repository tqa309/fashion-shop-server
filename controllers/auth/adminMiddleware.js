const models = require("../../models");

exports.adminMiddleware = async (req, res, next) => {
    try {
        const { email } = req.body.user;
        const user = await models.User.findOne({where: { email: email }})
        
        if (!user) {
            return res.status(400).json({
                error: 'Email chưa đăng ký.'
            });
        }

        console.log(user.role)

        if (user.role !== 'admin') {
            return res.status(400).json({
                error: 'Không có quyền truy cập nội dung này.'
            });
        }

        next();
    } catch (error) {
        return res.status(402).json({
            error: error
        });
    }
}
