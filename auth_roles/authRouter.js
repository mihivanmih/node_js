import Router from 'express'
import Authcontroller from './authController.js'
import { check } from 'express-validator'
const router = new Router()
import authMiddleware from './middlewaree/authMiddleware.js'
import roleMiddleware from './middlewaree/roleMiddleware.js'

router.post('/registration', [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check("password", "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10}),
], Authcontroller.registration)
router.post('/login', Authcontroller.login)
router.get('/users', roleMiddleware(['ADMIN', 'USER']), Authcontroller.getUsers)

export default router