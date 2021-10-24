const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const { DB, USER, PASSWORD, ...config } = dbConfig;
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize(DB, USER, PASSWORD, config);

fs.readdirSync(__dirname)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const {User, UserAddress} = db

User.hasOne(UserAddress, {
    onDelete: 'SET NULL',
    hooks: true
});

module.exports = db;
