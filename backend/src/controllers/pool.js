require('dotenv').config({ path: '../../.env' })
const { Pool, Client } = require('pg')

const pool = new Pool();
  
module.exports = {
  pool: pool,
}
pool.query('SELECT * from tabla', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  


