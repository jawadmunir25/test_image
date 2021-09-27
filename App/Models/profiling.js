/*
 Created by jawad on 09/26/2021.
*/
'use strict';
const mongoose = require('mongoose');

const profiling = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Uploaded file must have a name"],
    },
    image: {
        type: String //Base 64
    },
    imagePath: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('profiling', profiling);

