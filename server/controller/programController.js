const uuid = require('uuid')
const path = require('path')
const { Programs, ProgramInfo } = require('../models/models')

class ProgramController {
    async create(req, res, next) {
        try {
            let {images, date, description, active, info } = req.body

            const program = await Programs.create({ images, date, description, active })
            
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProgramInfo.create({
                        programId: program.id,
                        document: i.document,
                        telegram: i.telegram,
                        schedule: i.schedule,
                        work: i.work
                    })
                )
            }

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
