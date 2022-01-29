import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'
import MailService from './mail-service.js'
import tokenService from './token-service.js'
import UserDto from '../dtos/user-dto.js'
import ApiError from '../exceptions/api-error.js'

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email})
        if(candidate) {
            throw ApiError.BadRequest(`Пользователь с почтовым адресом ${email} уже существует`)
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuidv4()
        
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await MailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)
        
        const userDto = new UserDto(user) //id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        
        return {
            ...tokens,
            user: userDto
        }
    }
    
    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest('Некорректная ссылка активации')
        }
        user.isActivated = true;
        await user.save()
    }
    
    async login(email, password) {
        const user = await UserModel.findOne({email})
        if(!user) {
            throw ApiError.BadRequest('Пользователь с таким email не найден')
        }
        const isPassEquals = await bcrypt.compare(password, user.password)
        if(!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
    
        return {
            ...tokens,
            user: userDto
        }
    }
    
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }
}

export default new UserService()