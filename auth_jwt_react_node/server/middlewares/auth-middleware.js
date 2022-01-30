import ApiError from '../exceptions/api-error.js'
import tokenService from '../service/token-service.js'

export default function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }
        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken) {
            return next(ApiError.UnauthorizedError())
        }
        
        const userDara = tokenService.validateAccessToken(accessToken)
        if(!userDara) {
            return next(ApiError.UnauthorizedError())
        }
        req.user = userDara
        next()
    } catch (e) {
        return next(ApiError.UnauthorizedError())
    }
}