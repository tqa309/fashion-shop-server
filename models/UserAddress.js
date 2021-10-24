module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
        "UserAddress",
        {
            user_id : {
                type: DataTypes.INTEGER,
                references: {
                    model: 'User',
                    key: 'id'
                }
            },
            address_line1: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            address_line2: DataTypes.STRING,
            city: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            postal_code: DataTypes.INTEGER,
            country: DataTypes.STRING,
            phone: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            tableName: "user_address",
            timestamps: false,
        }
    );
};
