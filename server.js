import express from "express";
import mongoose from "mongoose";

const app = express();

const db = await mongoose.connect("mongodb://mymongo/proyectdb");
console.log(db.connection.db.databaseName);

const ProductSchema = new mongoose.Schema({
  name: String,
});

const ProductModel = mongoose.model("Product", ProductSchema);

app.get("/", async (req, res) => {
  const newProduct = await ProductModel.create({ name: "laptop" });
  res.json({ newProduct });
});

app.listen(3000);
console.log("Server on port 3000");
