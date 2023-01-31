const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");



const Client = sequelize.define('client', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }, 
    time: {
        allowNull: false,
        type: DataTypes.DATE
    },
    status: {
        allowNull: true,
        defaultValue: 1,
        type: DataTypes.CHAR
    }
});

module.exports = {
    Client
}