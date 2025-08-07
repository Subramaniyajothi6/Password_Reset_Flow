const express = require('express');
const errorRoute = require('./utils/errorRoute');
const logger = require('./utils/logger');
const authRouter = require('./routes/authRouter');
const cookieParser = require('cookie-parser');
const cors = require('cors');


const app = express();
app.use(cors({
  origin:[ 'http://localhost:5173', 'https://password-reset-flow-gb7g.onrender.com' , 'https://passwordreset-flow-frontend.netlify.app/'  ],
  credentials: true
}));

app.use(express.json());

app.use(cookieParser());

app.use(logger);

app.use("/api/v1/auth",authRouter);


app.use(errorRoute);

module.exports = app;