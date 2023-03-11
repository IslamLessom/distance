const Router = require('express')
const router = new Router()
const UserController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/teacher', UserController.registration),
router.post('/login', UserController.login),
router.get('/student', authMiddleware, UserController.check)

module.exports = router