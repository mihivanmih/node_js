import Router from 'express'
import userController from '../controllers/user-controller.js'
const router = new Router()

router.post('/registration', userController.registrationUser)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activateUser)
router.get('/refresh', userController.refresh)
router.get('/users', userController.getUser)

export default router