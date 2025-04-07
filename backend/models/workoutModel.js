const mongoose = require('mongoose')

// creating a new schema thats a mongo schema
// Schema holding a mongoose schema
//
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number, 
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, //when we create a new doc, or modify, automanatically adds a time stamp
{timestamps: true })

// creates a model that can interact with
// Workout.find()   (example)
module.exports = mongoose.model('Workout', workoutSchema)
