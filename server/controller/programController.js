const uuid = require('uuid')
const path = require('path')
const { Programs, ProgramInfo } = require('../models/models')

class ProgramController {
    async create(req, res, next) {
        try {
            let { date, description, active, info } = req.body
            
            const { img } = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProgramInfo.create({
                        programId: program.id,
                        document: i.document,
                        date: i.date,
                        description: i.description,
                        active: i.active
                    })
                )
            }

            const program = await Programs.create({ images: fileName, date, description, active })

            return res.json(program)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        let { limit, page } = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit

        let program

        program = await Programs.findAndCountAll({ limit, offset })

        return res.json(program)
    }

    async getOne(req, res) {
        const { id } = req.params
        const program = await Programs.findOne(
            {
                where: { id },
                include: [{ model: ProgramInfo, as: 'info' }]
            }
        )
        return res.json(program)
    }
}

module.exports = new ProgramController()
