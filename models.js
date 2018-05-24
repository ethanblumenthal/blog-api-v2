'use strict';

const mongoose = require('mongoose');

// SCHEMA
const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true}
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports(Post);