const { DataTypes } = require("sequelize")
const { sequelize } = require("./connection")


const Account = sequelize.define("account", {
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
    password: {
        allowNull: false,
        type: DataTypes.STRING
    }
})

module.exports = {
    Account
}