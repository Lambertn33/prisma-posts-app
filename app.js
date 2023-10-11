import express from "express";

import usersRoute from './routes/users.js'

import postsRoute from './routes/posts.js'

const app = express();

app.get("/", (_, res) => {
  res.status(200).json({ message: "working" });
});

app.use('/users', usersRoute);

app.use('/posts', postsRoute);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
