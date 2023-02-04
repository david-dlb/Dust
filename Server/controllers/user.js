const { Announcement } = require('../DB/announcement')
const { encript } = require('../utils/encript')

// Obtener todos los anuncios de una cuenta
const getAllAnnouncement = async (req, res) => {
    try {
        const announcements = await Announcement.findAll()
        res.json({
            status: "200",
            bag: announcements
        })
    } catch (error) {
        res.json({
            status: "404",
            msg: "Error al cargar la base de datos"
        })
    }
} 

module.exports = {
    getAllAnnouncement
}