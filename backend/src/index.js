var express = require('express')
var app = express()
require('dotenv').config()
console.log(process.env)

app.get('/', function (req, res) {
    res.send('hello world')
  })
  
  app.listen(3000)   