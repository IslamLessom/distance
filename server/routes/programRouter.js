const Router = require('express')
const programController = require('../controller/programController')
const router = new Router()

router.post('/', programController.create),
router.get('/', programController.getAll),
router.get('/:id', programController.getOne)

module.exports = router