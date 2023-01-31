const { existAnnouncementDB, existCategoryDB, existUserNameDB, existUserEmailDB } = require("../DB/dbHandler")

const isExistUserEmail = (email) => {
    const exist = existUserEmailDB(email) 
    if(exist){
        throw new Error("Correo electronico ya esta en uso")
    } 
    return true
}
const isExistUserName = (name) => {
    const exist = existUserNameDB(name)

    if(exist){
        throw new Error("Usuario ya esta en uso")
    } 
    return true
}
 
const isExistAnnouncement = (id) => {
    const exist = existAnnouncementDB(id)
    if(!exist){
        throw new Error("Anuncio no existe en la base de datos")
    }
    return true
}

const isExistCategory = (id) => {
    const exist = existCategoryDB(id)
    if(!exist){
        throw new Error("Categoria no existe en la base de datos")
    }
    return true
}

module.exports = {
    isExistUserEmail,
    isExistUserName,
    isExistAnnouncement,
    isExistCategory
}