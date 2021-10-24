const models = require("../../models");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        console.log(email);

        const user = await models.User.findOne({
            where: { email: email },
        });

        if (!user) {
            return res.status(401).json({
                error: "Email chưa được đăng ký!",
            });
        }

        const token = jwt.sign(
            { email: user.email },
            process.env.JWT_RESET_PASSWORD,
            { expiresIn: "30m" }
        );

        const emailData = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: `Lấy lại mật khẩu`,
            html: `
        <p>Hãy nhấn vào link bên dưới để lấy lại mật khẩu:</p>
        <p>${process.env.CLIENT_URL}/auth/password/reset/${token}</p>
        <hr />
        <p>Email chứa thông tin quan trọng, vui lòng không để lộ cho người khác.</p>
        <p>https://tranquocanh.com</p>
    `,
        };

        sgMail.send(emailData).then((sent) => {
            return res.status(200).json({
                message: `Email đã được gửi đến ${email}. Ấn vào link trong email để lấy lại mật khẩu. Link sẽ hết hạn trong 10 phút.`,
            });
        });
    } catch (error) {
        console.log(error)
        return res.status(402).json(error);
    }
};
