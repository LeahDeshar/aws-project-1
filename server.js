const express = require("express");
const app = express();
const userRoutes = require("./user.routes");
const connectDB = require("./connection");
require("dotenv").config();

connectDB();

app.use("/api/users", userRoutes);
app.get("/api/get", (req, res) => {
  res.send({
    message: "Scuccessful depployment of AWS Nodejs backend services project",
  });
});

app.get("/api/get_product_details", (req, res) => {
  res.send({
    product: {
      id: 101,
      name: "Laptop",
      price: 1500,
      inStock: true,
    },
    author: process.env.NAME,
    timestamp: new Date().toISOString(),
  });
});
const PORT = process.env.PORT;
console.log(process.env.PORT);
console.log("PORT:", PORT);
app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
