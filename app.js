const express = require('express');
const errorRoute = require('./utils/errorRoute');
const logger = require('./utils/logger');
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(logger);

app.use("/api/v1/auth",authRouter);


app.use(errorRoute);

module.exports = app;