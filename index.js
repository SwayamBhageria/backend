const express = require('express')
require('dotenv').config()
const app = express()
const port = 1000

app.get('/', (req, res) => {
  res.send('Hello ')
})
app.get('/twitch', (req, res) => {
    res.send('madison beer is live now ')
})
app.get('/login' , (req,res) => {
    res.send('<h1> login using ur btc address </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})