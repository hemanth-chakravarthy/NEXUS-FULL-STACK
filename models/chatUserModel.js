const mongoose = require("mongoose");

const chatUserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    is_online:{
        type:String,
        default:'0'
    }
},
{timestamps:true}
)

module.exports = mongoose.model('chatUser',chatUserSchema);