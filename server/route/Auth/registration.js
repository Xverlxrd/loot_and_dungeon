const {Router} = require('express');
const prisma = require("../../prisma/client");

const router = Router()

router.post('/registration', async (req, res) => {
    const {email, password, username, image} = req.body

    try {
        await prisma.user.create({
            data: {
                email,
                password,
                username,
                image
            }
        })
        res.status(201).json({
            message: 'User created'
        })
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router