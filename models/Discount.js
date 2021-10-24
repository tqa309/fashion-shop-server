module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "Discount",
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
            discount_percent: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            active: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            modified_at: DataTypes.DATE,
            deleted_at: DataTypes.DATE,
        },
        {
            tableName: "discount",
            timestamps: false,
        }
    );
};
