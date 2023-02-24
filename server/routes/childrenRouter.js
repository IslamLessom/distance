const Router = require('express')
const router = new Router()
const UserController = require('../controller/userController')

router.post('/teacher', UserController.teacher),
router.post('/login', UserController.login),
router.get('/auth', UserController.check)

module.exports = router