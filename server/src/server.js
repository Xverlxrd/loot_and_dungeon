import express from 'express'
import {PrismaClient} from "@prisma/client";
import {authRouter} from "./auth/auth.controller.js";
import helmet from "helmet";

const app = express()
export const prisma = new PrismaClient()
app.use(express.json())
app.use(helmet());

app.use(authRouter)

app.listen(process.env.PORT);


export default app