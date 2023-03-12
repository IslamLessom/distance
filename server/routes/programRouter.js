const Router = require('express')
const programController = require('../controller/programController')
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')
const router = new Router()

router.post('/', checkRoleMiddleware('ADMIN'), programController.create),
router.get('/', programController.getAll),
router.get('/:id', programController.getOne)

module.exports = router