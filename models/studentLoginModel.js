const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    gmail :{
        type: String,
        required: true,
        unique:true
    },
    phno:{
        type: String,
        required: true,
    },
    password1: {
        type: String,
        required: true
    },
    about: {
        type: String,
    },

    image: {
        type: Array,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'Admin'],
        default:'student'
    }
});

module.exports = mongoose.model("users",userSchema);