const express = require("express");
const app = express();
require("dotenv").config();

app.get("/api/update", (req, res) => {
  res.send({ message: "Update the code.." });
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
const PORT = process.env.PORT || 8001;
console.log("PORT:", PORT);
app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
