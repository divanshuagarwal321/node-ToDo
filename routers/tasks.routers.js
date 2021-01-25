const router = require('express').Router()
const controllers = require('../controllers/tasks.controllers')

router.get('/add', controllers.add)
router.get('/list', controllers.list)
router.get('/markComplete', controllers.markComplete)
router.get('/update', controllers.update)
router.get('/describe', controllers.describe)
router.get('/delete', controllers.delete)
router.get('/listOnlyRemaining', controllers.listOnlyRemaining)


module.exports = router