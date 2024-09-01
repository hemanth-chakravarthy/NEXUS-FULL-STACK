const mongoose = require("mongoose");

// Connect to MongoDB
const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
connect.then(() => {
  console.log(`Database connected successfully interested`);
}).catch(() => {
  console.log("Database connection failed");
});

const interestedSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
    category: {
        type: String,
        required: true
    },

    resume: {
        type: String,
        required: true
    },

    details: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    isSaved: {
      type: Boolean,
      default: false
    },
    isHired: {
      type: Boolean,
      default: false
    }
});

module.exports = new mongoose.model("interestedForm", interestedSchema);