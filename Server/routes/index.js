// Importing necessary modules and packages
const express = require('express');
const indexRouter = express.Router();
// const userRouter = require('./userRoute');
const userRoute = require('./userRoute')

// Using routes
indexRouter.use('/api/v1/user', userRoute);


// Exporting the app for use in another file
module.exports = indexRouter;
