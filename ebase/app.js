const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

app.use(morgan('dev'))
app.use(cors())


app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something went wrong!');
})

require('./routes/user.route')(app);

mongoose.connect('mongodb://localhost:27017/ebase', {
  useNewUrlParser: true
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  app.listen(3000, () => console.log('Eden Server ready!'))
})