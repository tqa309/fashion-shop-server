const jwt = require("jsonwebtoken");
const models = require("../../models");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.preRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const user = await models.User.findOne({
            where: { email: email },
        });
    
        if (user) {
            return res.status(400).json({
                error: "Email đã đăng ký!",
            });
        } else {
            const token = jwt.sign(
                { name, email, password },
                process.env.JWT_ACCOUNT_ACTIVATION,
                { expiresIn: "10m" }
            );
    
            const emailData = {
                from: process.env.EMAIL_FROM,
                to: email,
                subject: `[QA-SHOP] Kích hoạt tài khoản`,
                html: `
                <p>Hãy nhấn vào link bên dưới để xác nhận email:</p>
                <p>${process.env.CLIENT_URL}/kich-hoat-tai-khoan?token=${token}</p>
                <hr />
                <p>Email chứa thông tin quan trọng, vui lòng không để lộ cho người khác.</p>
                <p>https://shop.tranquocanh.com</p>
            `,
            };
    
            sgMail.send(emailData).then((sent) => {
                return res.json({
                    message: `Email đã được gửi đến ${email}. Ấn vào link trong email để kích hoạt.`,
                });
            });
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
};
