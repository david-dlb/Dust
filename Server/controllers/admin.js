const { sequelize } = require('../DB/connection')
const { Client } = require('../DB/client')
const { Announcement } = require('../DB/announcement')
const { encript } = require('../utils/encript')
const { json } = require('sequelize')

// Obtener todos los clientes
const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll()
        console.log(clients)
        res.json({
            clients
        })
    } catch (error) {
        res.status(404).json({
            msg: "Error al cargar la base de datos"
        })
    }
}

const getClientInformation = async (req, res) => {
    const { id } = req.params
    try {
        const announcement = await Announcement.findAll({
            where: {
                clientId: id
            }
        })
        const client = await Client.findByPk(id)
        res.json({
            client,
            cantAnnouncements: announcement.length
        })
    } catch (error) {
        res.status(404).json({
            msg: "Error al cargar la base de datos"
        })
    }
}

const addClient = async (req, res) => {
    const { name, email, password } = req.body
    try {
        console.log(name, email, password)
        const client = new Client({
            name: name,
            email: email,
            password: password,
            time: new Date(),
            status: 'A'
        })
        await client.save()
        res.json({
            client
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            msg: "Error al cargar la base de datos"
        })
    }
}

const editClient = async (req, res) => {
    const { id, name, status, time} = req.body
    try {
        const client = await Client.findByPk(id)
        await client.update({
            name: name,
            status: status,
            time: time
        })
        res.json({
            client
        })
    } catch (error) {
        res.status(404).json({
            msg: "Error al cargar la base de datos"
        })
    }
}

module.exports = {
    getAllClients,
    getClientInformation,
    addClient,
    editClient
}