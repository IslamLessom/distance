const uuid = require('uuid')
const path = require('path');
const ApiError = require('../error/ApiError')
const { User } = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, name, first_name, father_name, group, schedule, list_teacher, images, email, password, role) => {
    return jwt.sign(
        { id, name, first_name, father_name, group, schedule, list_teacher, images, email, password, role},
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        let {
            name,
            first_name,
            father_name,
            group,
            schedule,
            list_teacher,
            images,
            email,
            password,
            role,
        } = req.body

        if (!email || !password) {
            return next(ApiError.internal('Неверный логин или пароль'))
        }

        const candidate = await User.findOne({ where: { email } })

        if (candidate) {
            return next(ApiError.internal('Такой пользователь существует'))
        }

        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ name, first_name, father_name, group, schedule, list_teacher, images, email, password: hashPassword, role })
        const token = generateJwt(user.id, user.name, user.first_name, user.father_name, user.group, user.schedule, user.list_teacher, user.images, user.email, user.password, user.role,)

        return res.json({ token })
    }

    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Неверный email'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(user.id, user.name, user.first_name, user.father_name, user.group, user.schedule, user.list_teacher, user.images, user.email, user.password, user.role,)
        return res.json({ token })
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.name, req.user.first_name, req.user.father_name, req.user.group, req.user.schedule, req.user.list_teacher, req.user.images, req.user.email, req.user.password, req.user.role,)
        return res.json({ token })
    }
}

module.exports = new UserController()
