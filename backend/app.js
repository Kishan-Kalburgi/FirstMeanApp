const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requesed-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post(('/api/posts'), (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  })
});

app.get(('/api/posts'), (req, res, next) => {
  const posts = [
    {
      id: "sdjaflj3tu9",
      title: "First server-side posr",
      content: "This is coming form the server"
    },
    {
      id: "jsdgjkdfjg3",
      title: "Second server-side posr",
      content: "This is coming form the server!"
    }
  ]
  res.status(200).json({
    message: "Post fetched successfully",
    posts: posts
  });
});

module.exports = app;
