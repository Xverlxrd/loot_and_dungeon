const express = require('express');
const dotenv = require('dotenv');
const path = require("path");
const jwt = require('jsonwebtoken');

const indexRouter = require('./route/index')

const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter)

dotenv.config();
app.listen(process.env.PORT || 8082)