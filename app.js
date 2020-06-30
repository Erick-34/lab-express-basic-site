const express = require("express");
const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/work.html");
});

app.get("/photos", (req, res) => {
  res.sendFile(__dirname + "/views/photo.html");
});

//Server
app.listen(3000, () => {
  console.log("Server on in https://localhost:3000");
});
