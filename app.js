const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/astroTest', { useNewUrlParser: true })
  .then(() => console.log('Mongo connection open'))
  .catch((e) => console.log(e))

app.use(express.json())

app.listen(3000, () => {
  console.log('server listening')
})
