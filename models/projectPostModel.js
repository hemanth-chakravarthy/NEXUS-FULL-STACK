const mongoose = require('mongoose');

// const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
// connect.then(() => {
//     console.log(`Database connected yo collab!`);
// }).catch(() => {
//     console.log("Database connection failed");
// });

// Define schema for the data
const projectSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
});

// Create model for the schema
const projectCollab = mongoose.model('projects_collab', projectSchema);

module.exports = projectCollab;
