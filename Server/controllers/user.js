const { Announcement } = require('../DB/announcement')
const { encript } = require('../utils/encript')

// Obtener todos los anuncios de una cuenta
const getAllAnnouncement = async (req, res) => {
    try {
        const announcements = await Announcement.findAll()
        res.json({
            announcements
        })
    } catch (error) {
        res.status(404).json({
            msg: "Error al cargar la base de datos"
        })
    }
} 

module.exports = {
    getAllAnnouncement
}