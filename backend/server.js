require('dotenv').config()

//download the express app
const express = require('express')
//require mongoose odm library
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// start/invoke the express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// Connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // express is listening for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log('MongoDB connection error details:', {
            message: error.message,
            code: error.code,
            codeName: error.codeName
        })
    })