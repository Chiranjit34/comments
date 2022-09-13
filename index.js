const express = require("express");
const connection = require("./db");
require("dotenv").config();
const Post = require("./models/PostModels");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Ok!");
});

app.get("/comments", async (req, res) => {
  const comments = await Post.find({});
  res.send(comments);
});

app.post("/comments/:id", async (req, res) => {
  let id = req.params.id;
  const post = await Post.findOne({ _id: id });
  post.comments.push(req.body);
  post.save();
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log(`Listening on ${port}...`);
  } catch {
    console.log("runtime err");
  }
});
