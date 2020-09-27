const {Schema, model} = require('mongoose')

const schema = new Schema({
title: {
    type: String,
    required: true
},
completed: Boolean,
default: false
})

module.exports = model('Todo', schema)