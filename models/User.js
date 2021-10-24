module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "User",
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.NOW,
            },
            role: DataTypes.STRING,
            modified_at: DataTypes.DATE,
        },
        {
            tableName: "user",
            timestamps: false,
        }
    );
};
