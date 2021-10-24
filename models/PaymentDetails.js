module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "PaymentDetails",
        {
            order_id : {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            amount  : {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            provider : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status : {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modified_at: DataTypes.DATE,
        },
        {
            tableName: "payment_details",
            timestamps: false,
        }
    );
};
