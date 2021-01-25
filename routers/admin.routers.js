const router = require('express').Router()
const controllers = require('../controllers/admin.controllers')

router.get('/add', controllers.add)
router.get('/list', controllers.list)
router.get('/delete', controllers.delete)
router.get('/showAllData', controllers.showAllData)
router.get('/describeUserData', controllers.describeUserData)
router.get('/describeTasks', controllers.describeTask)


module.exports = router