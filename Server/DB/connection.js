const { Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(
    'dust',
    'david',
    'Lily2@21',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = {
    sequelize
}