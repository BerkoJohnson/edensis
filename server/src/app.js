const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(express.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello World!'
  })
})

app.listen(process.env.PORT || 3000)