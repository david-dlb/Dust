const { give } = require('../DB/give')
const { integrants } = require('../DB/integrants')
const { encript } = require('../utils/encript')

// Obtener todos los anuncios de una cuenta
const getGive = async (req, res) => {
    const data = req.body
    try {
        const inn = await integrants.findAll({
            where: {
                name: data.name
            }
        })
        if (inn.length != 0) {
            try {
                const exist = await give.findAll({
                    where: {
                        regalador: data.name
                    }
                })
                if (exist.length != 0) {
                    res.json({
                        status: "404",
                        msg: "ya tienes regalo "
                    })
                }
            } catch (error) {
                res.json({
                    status: "404",
                    msg: "No se pudo obtener "
                })
            }

            const list = await integrantsAvailable()
            console.log(list[0], data.name)
            let mk = false
            let rand = 0
            let cant = 0
            while (mk == false) {
                rand = Math.floor(Math.random() * list.length)
                if (list[rand] != data.name) {
                    mk = true
                }
                if (cant > 1000) {
                    res.json({
                        status: "404",
                        msg: "No se pudo obtener "
                    })
                }
                cant++
            }
            console.log(list[rand])
            try {
                // const give = new give({
                //     regalador: data.name,
                //     regalado: list[rand]
                // })

                const p = new give({
                    regalador: data.name,
                    regalado: list[rand]
                })
                console.log(p)
                p.save()
                res.json({
                    status: "200",
                    bag: list[rand]
                })
            } catch (error) {
                res.json({
                    status: "404",
                    msg: "No se pudo obtener "
                })
            }
            console.log(give)
            // give.save()

            res.json({
                status: "200"
            })
        }
        else {
            res.json({
                status: "404",
                msg: "Persona no registrada"
            })
        }


    } catch (error) {
         
    }
}

// los que pueden ser regaladores
const getIntegrantsAvailable = async (req, res) => {
    try {
        const all = await integrants.findAll()
        const selected = await give.findAll()
        const list = []
        for (let i = 0; i < all.length; i++) {
            const element = all[i];
            const person = await give.findAll({
                where: {
                    regalador: element.dataValues.name
                }
            })
            if (person.length == 0) {
                list.push(all[i].dataValues.name)
            }
        }
        res.json({
            status: "200",
            bag: list
        })
    } catch (error) {
        res.json({
            status: "404",
            msg: "Error al cargar la base de datos"
        })
    }
}

// los que pueden ser regalados
const integrantsAvailable = async () => {
    const all = await integrants.findAll()
    const selected = await give.findAll()
    const list = []
    for (let i = 0; i < all.length; i++) {
        const element = all[i];
        const person = await give.findAll({
            where: {
                regalado: element.dataValues.name
            }
        })
        if (person.length == 0) {
            list.push(all[i].dataValues.name)
        }
    }
    return list
}

module.exports = {
    getGive,
    getIntegrantsAvailable
}