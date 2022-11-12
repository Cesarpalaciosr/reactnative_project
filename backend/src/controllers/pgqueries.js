const { pool } = require("./pool");

pool.query('SELECT * from tabla', (err, res) => {
    console.log(err, res)
    //pool.end()
  })
  

  module.exports = {
    
  }