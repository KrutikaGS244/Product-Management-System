const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Product = require("./models/Product");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/shopping");

app.get("/products", async (req, res) => {

  const products = await Product.find();

  res.json(products);

});

app.post("/products", async (req, res) => {

  const newProduct = new Product(req.body);

  await newProduct.save();

  res.json(newProduct);

});

app.put("/products/:id", async (req, res) => {

  await Product.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.send("Updated");

});

app.delete("/products/:id", async (req, res) => {

  await Product.findByIdAndDelete(
    req.params.id
  );

  res.send("Deleted");

});

app.listen(5000, () => {
  console.log("Server Running");
});