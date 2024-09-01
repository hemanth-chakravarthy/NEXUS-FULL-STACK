const mongoose = require('mongoose');

// const connect = mongoose.connect("mongodb://localhost:27017/NEXUS",);

// Check database connectivity
// connect.then(() => {
//     console.log(`Database connected yo collab!`);
// }).catch(() => {
//     console.log("Database connection failed");
// });

// Define schema for the data
const projectUserSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects_collabs",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected'],
        required: true
    }
});

projectUserSchema.index({ projectId: 1, userId: 1 }, { unique: true });

// Create model for the schema
const projectUserCollab = mongoose.model('projects_users_collab', projectUserSchema);

module.exports = projectUserCollab;
