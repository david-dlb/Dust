const { Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize(
    'deivistm_dust',
    'deivistm',
    'DTM02030362406@',
    {
        host: 'mysql-deivistm.alwaysdata.net',
        dialect: 'mysql'
    }
);

module.exports = {
    sequelize
}