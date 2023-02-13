const { DataTypes } = require("sequelize")
const { sequelize } = require("./connection")


const give = sequelize.define("give", {
    regalador: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    regalado: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    }
})

module.exports = {
    give
}