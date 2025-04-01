const express = require('express')
const session = require('express-session')
const path = require('path');
const app = express()
const port = 3000

const db = require('./lib/db');
const sessionOption = require('./lib/sessionOption');
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
})

app.use(express.static(patjh.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());