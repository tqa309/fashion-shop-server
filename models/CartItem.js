module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "CartItem",
        {
            session_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            product_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity: {
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
            tableName: "cart_item",
            timestamps: false,
        }
    );
};
