module.exports = {
    DB: process.env.DB_NAME,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,

    host: process.env.DB_HOSTNAME,
    port: 5432,
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
