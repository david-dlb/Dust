const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");



const Announcement = sequelize.define('announcement', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING
    },
    contact: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    image: {
        allowNull: false,
        type: DataTypes.STRING
    },
    clientId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    time: {
        allowNull: false,
        type: DataTypes.DATE
    },
    likes: {
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
    Announcement
}