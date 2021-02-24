const mongoose = require('mongoose');

const BugSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    page: {
        type: String,
        required: true
    },
    bugName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}, {collection: 'bugs'});

module.exports = Bugs = mongoose.model('bugs', BugSchema);