module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "OrderDetails",
        {
            user_id : {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            payment_id : {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modified_at: DataTypes.DATE,
        },
        {
            tableName: "order_details",
            timestamps: false,
        }
    );
};
