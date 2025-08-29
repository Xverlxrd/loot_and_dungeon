import {Router} from "express";
import {prisma} from "../server.js";

const router = Router()

router.get('/api/login', async (req, res) => {
    const user = await prisma.user.findMany()

    res.status(200).json(user)
})

export const authRouter = router