const pool = require("../../databse");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userQuery = `SELECT * FROM "user" WHERE email='${email}' AND password='${password}' LIMIT 1;`;

        console.log(userQuery)

        const queryData = await pool.query(userQuery)
        
        const user = queryData.rows[0]

        if (!user) {
            return res.status(400).json({
                error: "Email hoặc mật khẩu không đúng!",
            });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.cookie("token", token, { expiresIn: "1d" });
        const { id, name, role } = user;

        return res.status(201).json({
            token,
            user: { id, name, role }
        });
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
};
