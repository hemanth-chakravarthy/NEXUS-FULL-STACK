const mongoose = require("mongoose");

// Connect to MongoDB
const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
connect.then(() => {
  console.log(`Database connected successfully edit`);
}).catch(() => {
  console.log("Database connection failed");
});

const editSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    about: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: true
    },
});

module.exports = new mongoose.model("edit_dets", editSchema);