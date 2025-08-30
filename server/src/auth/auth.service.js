import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";

export class AuthService {
    createAccessToken(username) {
        return jwt.sign({data: username}, process.env.AUTH_SECRET_TOKEN, {expiresIn: '15m'})
    }
    createRefreshToken(username) {
        return jwt.sign({data: username}, process.env.REFRESH_AUTH_SECRET_TOKEN, {expiresIn: '1m'})
    }

    verifyRefreshToken(token) {
        return jwt.verify(token, process.env.REFRESH_AUTH_SECRET_TOKEN);
    }

    comparePassword(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword);
    }
}