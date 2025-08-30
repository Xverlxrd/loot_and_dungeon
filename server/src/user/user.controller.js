import {Router} from "express";
import {prisma} from "../server.js";
import {UserService} from "./user.service.js";
import {authMiddleware} from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";

const router = Router()
const userService = new UserService()

/** TODO
 * Добавить валидацию
 * Добавить обработку ошибок
 */

// POST запрос на создание пользователя
router.post('/api/user', authMiddleware ,async(req, res) => {
    const {username, password, email} = req.body

    if(prisma.user.findUnique(username || email) ) {
        res.status(401).json({
            message: "Пользователь уже существует"
        })
    }

    const newPassword = await userService.hashPassword(password)

    const user = await userService.createUser(username, newPassword,  email)
    delete user.password
    res.status(201).json(user)
})

// GET запрос на получение пользователя
router.get('/api/user', authMiddleware, async(req,  res) => {
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.verify(token, process.env.AUTH_SECRET_TOKEN).data.id

    const user = await userService.getMe(userId)
    delete user.password
    delete user.createdAt

    res.status(200).json(user)
})

// DELETE запрос на удаление пользователя
router.delete('/api/user', authMiddleware, async(req,  res) => {
    const token = req.headers.authorization.split(' ')[1]
    const userId = jwt.verify(token, process.env.AUTH_SECRET_TOKEN).data.id

    await userService.deleteUser(userId)

    res.status(200).json({
        message: "Пользователь удален"
    })
})

// GET запроc на получение списка пользователей
router.get('/api/user_list', authMiddleware, async(req,  res) => {
    const users = await userService.getUsers()
    res.status(200).json(users)
})

export const userRouter = router