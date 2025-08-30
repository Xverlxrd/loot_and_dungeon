import express from 'express'
import {PrismaClient} from "@prisma/client";
import {authRouter} from "./auth/auth.controller.js";
import helmet from "helmet";
import {userRouter} from "./user/user.controller.js";
import cors from 'cors';

const app = express()
export const prisma = new PrismaClient()

app.use(express.json())
app.use(helmet());
app.use(cors({
    origin: ['http://localhost:5173', 'https://loot-and-dungeon.vercel.app/'],
    credentials: true
}));

app.use(authRouter)
app.use(userRouter)

app.listen(process.env.PORT);


export default app