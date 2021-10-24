module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "ShoppingSession",
        {
            user_id : {
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
            tableName: "shopping_session",
            timestamps: false,
        }
    );
};
