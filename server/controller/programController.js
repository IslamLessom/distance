const uuid = require('uuid')
const path = require('path')
const { Programs } = require('../models/models')

class ProgramController {
    async create(req, res, next) {
        try {
            const { date, description, active } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const program = await Programs.create({ images: fileName, date, description, active })

            return res.json(program)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }
}

module.exports = new ProgramController()
