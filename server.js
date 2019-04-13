const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config()

const items = require('./routes/api/items')

const app = express() 

//BodyParser Middleware
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_DB_API, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('Something went wrong ' + err))

// Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000

app.listen(port, () => console.log('Server started on port ' + port))



