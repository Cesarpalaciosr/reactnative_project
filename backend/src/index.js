const express = require('express')
const app = express()
const pgqueries = require("./controllers/pgqueries")


app.get('/', function (req, res) {
    res.send('hello world')
  })
  
  app.listen(3000)   