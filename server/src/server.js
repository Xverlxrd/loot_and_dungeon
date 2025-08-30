import express from 'express'
import {PrismaClient} from "@prisma/client";
import {authRouter} from "./auth/auth.controller.js";
import helmet from "helmet";
import {userRouter} from "./user/user.controller.js";
import {authMiddleware} from "./middleware/auth.middleware.js";

const app = express()
export const prisma = new PrismaClient()

app.use(express.json())
app.use(helmet());

app.use(authRouter)
app.use(userRouter)

app.listen(process.env.PORT);


export default app