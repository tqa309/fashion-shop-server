module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "ProductCategory",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            slug: {
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
            tableName: "product_category",
            timestamps: false,
        }
    );
};
