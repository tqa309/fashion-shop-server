module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "UserPayment",
        {
            user_id : {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            payment_type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            provider: DataTypes.STRING,
            account_no: DataTypes.INTEGER,
            expiry: DataTypes.DATE,
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modified_at: DataTypes.DATE,
        },
        {
            tableName: "user_payment",
            timestamps: false,
        }
    );
};
