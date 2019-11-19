'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        password: DataTypes.STRING,
        birthday: DataTypes.STRING,
        gender: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};
