const express = require("express");

const port = process.env.port || 5510;

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("ERROR", err);
  }
  console.log(`Listening on port ${port}`);
});
