const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
  name: String,
  title: String,
  description: String
}, { timestamps: true });

const Blog = mongoose.model('Blog', BlogPost);

module.exports = Blog;