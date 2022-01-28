import userService from '../service/user-service.js'

class UserController {
    
    async registrationUser(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.registration(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30* 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    
    async login(req, res, next) {
        try {
        
        } catch (e) {
            next(e)
        }
    }
    
    async logout(req, res, next) {
        try {
        
        } catch (e) {
            next(e)
        }
    }
    
    async activateUser(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }
    
    async refresh(req, res, next) {
        try {
        
        } catch (e) {
            next(e)
        }
    }
    
    async getUser(req, res, next) {
        try {
            res.json(['123', '456'])
        } catch (e) {
            next(e)
        }
    }
    
}

export default new UserController()