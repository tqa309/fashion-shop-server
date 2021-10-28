const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
// bring routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const userAddressRoutes = require("./routes/userAddress");
const productRoutes = require("./routes/product");

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors
var whitelist = ['http://localhost:3000', 'https://digiviet.xyz']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", userAddressRoutes);
app.use("/api", productRoutes);

// requireSignin error handler
app.use(function (err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        res.status(err.status).send({ message: err.message });
        logger.error(err);
        return;
    }
    next();
});

// port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
