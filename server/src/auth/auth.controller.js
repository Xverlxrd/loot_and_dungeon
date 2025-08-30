import {Router} from "express";
import {AuthService} from "./auth.service.js";
import {prisma} from "../server.js";

const router = Router()
const authService = new AuthService()

router.post('/api/login',  async(req, res) => {
    const {username, password} = req.body

    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    delete user.password
    delete user.createdAt

    const access_token = authService.createAccessToken(user)
    const refresh_token = authService.createRefreshToken(user)

    res.status(201).json(
        {
            access_token: access_token,
            refresh_token: refresh_token
        }
    )
})

export const authRouter = router