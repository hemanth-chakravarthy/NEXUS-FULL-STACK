const mongoose = require('mongoose');

const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
connect.then(() => {
  console.log(`Database connected yo saved!`);
}).catch(() => {
  console.log("Database connection failed");
});

// Define schema for the data
const hireSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  category: {
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
    default: true
  },
  isHired: {
    type: Boolean,
    default: false
  }
});

// Create model for the schema
const Profile = mongoose.model('user_dets', hireSchema);

module.exports = Profile;
