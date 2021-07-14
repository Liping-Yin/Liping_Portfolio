import express from "express";
import data from "./data.js"; // notice the .js

const app = express();

// APIs
app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// set root
app.get("/", (req, res) => {
  res.send("Server is ready");
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server at http://localhost:${port}`);
});
