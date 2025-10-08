const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
name :{
    type : String,
    require: true,
},
description :{
    type : String,
    require: true,
},
image :{
   type: String,
   require : true
},
link :{
    type : String,
    require: true,
},
tool:{
    type: String,
    require: true
}

})

module.exports = mongoose.model("Project", projectSchema)