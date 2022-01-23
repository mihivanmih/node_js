import Router from 'express'
import Authcontroller from './authController.js'
const router = new Router()

router.post('/registration', Authcontroller.registration)
router.post('/login', Authcontroller.login)
router.get('/users', Authcontroller.getUsers)

export default router