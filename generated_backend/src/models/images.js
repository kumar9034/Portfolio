const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    imageurl :{
        type: String,
        require: true
    }
}, {timestamps: true})
module.exports = mongoose.model("Image", imageSchema)