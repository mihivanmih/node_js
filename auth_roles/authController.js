import User from './models/User.js'
import Role from './models/Role.js'
import bcrypt from 'dcryptjs'
import { validationResult } from 'express-validator'
import jwt from 'jsonwebtoken'
import config from './config.js'

const generateAccesToken = (id, roles) => {
  const payload = {
      id,
      roles
  }
  return jwt.sign(payload, config.secret, {expiresIn: "24h"})
}

class AuthController {
    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регистрации", errors})
            }
            const {username, password} = req.body
            const candidate = await User.findOne({username})
            if(candidate) {
                res.status(400).json({message: 'Пользователь с таким именем уже существует'})
            }
            const hashPass = bcrypt.hash(password, 7)
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password:hashPass, roles:[userRole.value] })
            await user.save()
            res.json({message: 'Пользователь сохранен'})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Registartion error'})
        }
    }
    async login(req, res) {
        try {
            const {username, password} = req.body
            const user = await User.findOne({username})
            if(!user) {
                return res.status(400).json({message: `Пользователь ${username} не найден`})
            }
            const validPassword = bcrypt.compare(password, user.password)
            if(!validPassword) {
                return res.status(400).json({message: `Введен неверный пароль`})
            }
            const token = generateAccesToken(user._id, user.roles)
            return res.json({token})
        } catch (e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
            console.log(e)
        }
    }
}

export default new AuthController()