const express = require('express');
const app = express();
const usersRout = require('./routes/users');
const auditterMod = require('./auditter/auditter')
const auditter = new auditterMod.Auditter();

app.use(express.json())
app.use((req) => {
    auditter.log(req);
})
app.use('/',usersRout);


module.exports = app;