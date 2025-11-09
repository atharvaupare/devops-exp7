const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps Exp 7: CI/CD with GitHub Actions & Docker is working!");
});

module.exports = app;
