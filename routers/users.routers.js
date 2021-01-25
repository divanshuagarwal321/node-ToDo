const router = require('express').Router()
const {
    auth,
    middleware2
} = require('../middlewares/users.middleware')
const controller = require('../controllers/users.controllers')

router.get('/', auth, middleware2, controller.homepage)
router.get('/signup', controller.signup)
router.get('/login', auth, middleware2, controller.login)
router.get('/list', auth, middleware2, controller.list)//use admin auth
router.get('/update', auth, middleware2, controller.update)
router.get('/describe', auth, middleware2, controller.describe)
router.get('/delete', auth, middleware2, controller.delete)

module.exports = router