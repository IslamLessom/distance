const Router = require('express')
const router = new Router()
const UserController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.post('/teacher', checkRoleMiddleware('ADMIN'), UserController.registration),
router.post('/login', UserController.login),
router.get('/auth', authMiddleware, UserController.check)

module.exports = router