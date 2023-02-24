const Router = require('express')
const router = new Router()
const childrenRouter = require('./childrenRouter')
const programRouter = require('./programRouter')

router.use('/program', programRouter),
router.use('/children', childrenRouter)

module.exports = router