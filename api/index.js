//environment variables
require('dotenv').config()
const { PORT } = process.env
//dependencies
const express = require('express')

const mongoose = require('mongoose')

const ShortUrl = require('./models/shorturls')

const app = express()
//database connection
mongoose.connect('mongodb://localhost/acortadordeurl', {useNewUrlParser: true, useUnifiedTopology: true})
//middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/acortadordeurl', async (req, res) => {
  await ShortUrl.create({full:req.body.longname})
  res.redirect('/')
})



//server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

