const mongoose = require('mongoose')
const validator = require('validator')


//Task model to create same structure collection
const Task = mongoose.model('tasks', {
    description: {
        type: String,
        required: true,
        trim: true,

    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})


module.exports = Task