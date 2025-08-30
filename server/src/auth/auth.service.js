import jwt from 'jsonwebtoken'

export class AuthService {
    createAccessToken(username) {
        const token = jwt.sign({ data: username}, process.env.AUTH_SECRET_TOKEN, { expiresIn: '15m' });

        return token
    }
    createRefreshToken(username) {
        const token = jwt.sign({ data: username}, process.env.REFRESH_AUTH_SECRET_TOKEN, { expiresIn: '15m' });

        return token
    }
}