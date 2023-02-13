const { DataTypes } = require("sequelize")
const { sequelize } = require("./connection")


const integrants = sequelize.define("integrants", {
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
    }
})

module.exports = {
    integrants
}