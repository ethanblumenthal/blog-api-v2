'use strict';

const mongoose = require('mongoose');

// SCHEMA
const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    created: {type: Date, default: Date.now},
    author: {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true}
    }
});

// VIRTUAL PROPERTIES
postSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim()
});

// INSTANCE METHODS
postSchema.methods.serialize = function() {
  return {
    id: this._id,
    title: this.title,
    content: this.content,
    created: this.created,
    author: this.authorName,
  };
}

const Post = mongoose.model('Post', postSchema);

module.exports(Post);