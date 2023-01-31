const { announcementFile, clientFile } = require("../utils/files");
const { loadClients, loadAnnouncement, save } = require("./fileHandler")

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

const client = () => {
    const client = sequelize.define('client', {
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
        gmail: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        time: {
            allowNull: false,
            type: Sequelize.DataTypes.DATE
        },
        status: {
            allowNull: true,
            defaultValue: 1,
            type: DataTypes.CHAR
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'client',
        classMethods: {}
    });
    return client
}
 
const loadAllClients = () => {
    const clients = loadClients()
    return clients;
}


const loadAllAnnouncement = () => {
    const announcement = loadAnnouncement()
    return announcement;
}

const saveAnnouncement = (data) => {
    save(data, announcementFile)
}

const saveClients = (data) => {
    save(data, clientFile)
}



module.exports = {
    loadAllClients,
    loadAllAnnouncement,
    saveAnnouncement,
    saveClients
}