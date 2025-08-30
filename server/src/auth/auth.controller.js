import {Router} from "express";
import {AuthService} from "./auth.service.js";
import {prisma} from "../server.js";

const router = Router()
const authService = new AuthService()

/** TODO:
 * 1.Создать роут для регистрации
 * 2.Добавить нормальную обработку ошибок
 * 3.Сократить код всех роутеров
 * 4.Поискать другую библиотеку для работы с токенами, так как в этой нельзя деактивировать старые
 */

router.post('/api/login',  async(req, res) => {
    const {username, password} = req.body

    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if (!user) {
        return res.status(401).json({
            error: 'Неверное имя пользователя или пароль'
        });
    }


    const isPasswordValid = await authService.comparePassword(
        password,
        user.password
    );

    if (!isPasswordValid) {
        return res.status(401).json({
            error: 'Неверное имя пользователя или пароль'
        });
    }


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

router.post('/api/refresh',  async(req, res) => {
    try {
        const { refresh_token } = req.body;
        if (!refresh_token) {
            return res.status(401).json({
                error: 'Refresh token обязателен'
            });
        }

        const decoded = authService.verifyRefreshToken(refresh_token);

        const user = await prisma.user.findUnique({
            where: {
                id: decoded.data.id
            },
            select: {
                id: true,
                username: true,
                email: true
            }
        });

        if (!user) {
            return res.status(401).json({
                error: 'Пользователь не найден'
            });
        }

        const new_access_token = authService.createAccessToken(user);
        res.status(200).json({
            access_token: new_access_token,
        });
    }
    catch (e) {
        res.status(401).json({
            message: "Токен истек",
            error: e
        })
    }
})

export const authRouter = router