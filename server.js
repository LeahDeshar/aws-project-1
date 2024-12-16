const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send({ message: "HOME" });
});

app.get("/api/get", (req, res) => {
  res.send({ message: "Welcome" });
});

app.get("/api/get_user_details", (req, res) => {
  res.send({
    user: {
      name: "John Doe",
      age: 22,
      contact: 12254,
    },
    env: process.env.NAME,
  });
});
const PORT = process.env.PORT || 80;
console.log("PORT:", PORT);
app.listen(80, () => {
  console.log(`listening to ${PORT}`);
});
