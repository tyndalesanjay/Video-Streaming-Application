const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

// Mongoose Connection (Always fixed)
mongoose
  .connect("mongodb://127.0.0.1:27017/videoStreaming")
  .then((x) => {
    console.log(
      `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err.reason);
  });

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Connected to http://localhost:${port}`)
);
