const {Router} = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const router = Router()
const prisma = new PrismaClient(); // Создаем экземпляр

router.post('/registration', async (req, res) => {
    try {
        console.log('Prisma client available:', !!prisma);
        console.log('Prisma user model available:', !!prisma.user);

        const { email, password, username, image } = req.body;

        // Validate required fields
        if (!email || !password || !username) {
            return res.status(400).json({
                message: 'Email, password, and username are required'
            });
        }


        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                username,
                image: image || 'default-avatar.png' // Provide a default image
            }
        });

        // Remove password from response
        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({
            message: 'User created successfully',
            user: userWithoutPassword
        });

    } catch (error) {
        console.error('Registration error details:', error);

    }
});

module.exports = router