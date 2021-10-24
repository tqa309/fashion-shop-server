module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "Product",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            slug: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            inventory: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            discount_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            role: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modified_at: DataTypes.DATE,
        },
        {
            tableName: "product",
            timestamps: false,
        }
    );
};
