const { sequelize } = require('../DB/connection')
const { Announcement } = require('../DB/announcement')
const { encript } = require('../utils/encript')
const { Client } = require('../DB/client')

// Obtener todos los anuncios de una cuenta
const getMyAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.findAll({
            where: {
                clientId: req.uid
            }
        })
        res.json({
            status: "200",
            bag: announcement
        })
    } catch (error) {
        res.json({
            status: "404",
            msg: "Error al cargar la base de datos"
        })
    }
}

const addAnnouncement = async (req, res) => {
    let data = req.body 
    try {
        const announcement = new Announcement({
            ...data,
            clientId: req.uid,
            time: new Date(),
            likes: 0
        })
        announcement.save()
        res.json({
            status: "200",
            bag: announcement
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "404",
            msg: "Error al cargar la base de datos"
        })
    }
}


const editAnnouncement = async (req, res) => {
    let data = req.body
    try {
        const announcement = await Announcement.findOne({
            where: {
                id: data.id
            }
        }) 
        await announcement.update({
            ...data,
            clientId: req.uid,
            time: new Date()
        })
        res.json({
            announcement
        })
    } catch (error) {
        console.log(error)
        res.json({
            status: "404",
            msg: "Error al cargar la base de datos"
        })
    }
}

const editAccount = async (req, res) => {
    let { name } = req.body
    try {
        const client = await Client.findByPk(req.uid)
        await client.update({name: name})
        res.json({
            status: "200",
            msg: "correct"
        })
    } catch (error) {
        res.json({
            status: "401",
            msg: "incorrect"
        })
    }
    
}

module.exports = {
    getMyAnnouncement,
    addAnnouncement,
    editAnnouncement,
    editAccount
}