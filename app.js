const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("DevOps Exp 7: CI/CD with GitHub Actions & Docker is working!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
