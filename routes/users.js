const express = require('express');
const userRoute = express.Router();
const auditter = require('../auditter/auditter.js')

userRoute.get('/api/users' , (req,res) => {
    //write to log using our logger

    res.send('trying to get the user');
    res.end();
})

userRoute.post('/api/users/register', (req,res) =>{
    //write to log using our logger

    //find a user with same email or phone . if such fail

    //save the user in persistence

    //send email via the email worker
    res.send('adding a user');
    res.end();
})

userRoute.put('/api/users/update', (req,res) =>{
    //write to log using our logger
    res.send('adding a user');
    res.end();
})

module.exports = userRoute;