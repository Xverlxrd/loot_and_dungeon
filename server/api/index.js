const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const jwt = require('jsonwebtoken');
const {$disconnect} = require("../prisma/client");

const loginRouter = require('../route/Auth/login')
const registrationRouter = require('../route/Auth/registration')
const logoutRouter = require('../route/Auth/logout')

const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(loginRouter)
app.use(registrationRouter)
app.use(logoutRouter)

dotenv.config();
app.listen(process.env.PORT || 8082)

process.on('SIGINT', async () => {
    await $disconnect()
    process.exit(0)
})
module.exports = app;
