const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  postId: Number,
  id: Number,
  name: String,
  email: String,
  body: String,
  comments: [
    {
      comments: Array,
    },
  ],
});
const Post = model("Post", PostSchema);
module.exports = Post;