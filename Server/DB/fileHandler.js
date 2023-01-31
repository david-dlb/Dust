const fs = require('fs')
const { clientFile, announcementFile, accountFile } = require('../utils/files')


const loadAccount = () => {
    const data = load(accountFile)
    return data
}

const loadClients = () => {
    const data = load(clientFile)
    return data
}

const loadAnnouncement = () => {
    const data = load(announcementFile)
    return data
}

const save = async (data, file) => {
    data = JSON.stringify(data, null, 4)
    fs.writeFile(file, data, (err) => {
        if (err) { throw new Error("Error en la base de datos") }
    })

}


const load = (file) => {
    if (!fs.existsSync(file)) {
        return null
    }
    let data = []
    try {
        data = fs.readFileSync(file, { encoding: 'utf-8' })
        data = JSON.parse(data) 
    } catch (error) {  
        return []
    } 
    return data
}

module.exports = {
    loadAccount,
    loadClients,
    loadAnnouncement,
    save
}