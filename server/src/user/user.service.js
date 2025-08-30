import {prisma} from "../server.js";
import bcrypt from "bcrypt";

export class UserService {

    deleteUser(id) {
        return prisma.user.delete({
            where: {
                id: id
            }
        })
    }
    getMe(id) {
        return prisma.user.findUnique({
            where: {
                id: id
            }
        })
    }
    getUsers() {
        return prisma.user.findMany()
    }
    createUser(username, password, email) {

        return prisma.user.create({
            data: {
                username,
                password,
                email
            }
        })
    }

    hashPassword(password) {
        return bcrypt.hash(password, 10)
    }
}