import express from  'express'
import {PrismaClient} from "@prisma/client";
import {authRouter} from "./auth/auth.controller.js";
import helmet from "helmet";

const app = express()
export const prisma = new PrismaClient()
async function main() {
    app.use(express.json())
    app.use(helmet());

    app.use(authRouter)

    app.listen(8080, () => {
        console.log('server is running')
    })
}

main().then(async () => {
    await prisma.$connect()
}).catch(async (e) => {
    await prisma.$disconnect()
    process.exit(1)
})

export default main