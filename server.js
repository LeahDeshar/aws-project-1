const express = require("express");
const app = express();
const userRoutes = require("./user.routes");
const connectDB = require("./connection");
require("dotenv").config();
connectDB();
app.get("/api/update", (req, res) => {
  res.send({ message: "Update the code.." });
});
app.use("/api/users", userRoutes);
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
console.log(process.env.PORT);
console.log("PORT:", PORT);
app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
