const express = require('express');
const route = express.Router();
const User = require('../controllers/user')

route.get('/getUser',  User.getUsers );
route.post('/createUser', User.createUser);



module.exports = route;
