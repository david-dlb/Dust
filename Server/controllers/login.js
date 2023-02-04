const { sequelize } = require('../DB/connection')
const { Client } = require('../DB/client')
const { encript } = require('../utils/encript')
const { generateJwt } = require('../utils/generate-jwt')

const getUser = async (req, res) => {
    const data = req.body
    const password = encript(data.name, data.password)
    //console.log(password)


    try {
        const user = await Client.findAll({
            where: {
                name: data.name,
                password: password
            }
        })
        const { id, name} = user[0].dataValues
        let token = await generateJwt(id, name)
        res.json({
            status: "200",
            bag: token
        })
    } catch (error) {
        res.json({
            status: "401",
            msg: error
        })
    }

}


module.exports = {
    getUser
}
