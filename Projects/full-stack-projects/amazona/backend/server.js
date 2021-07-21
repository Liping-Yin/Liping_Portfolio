import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import dotenv from "dotenv";
import orderRouter from "./routers/orderRouters.js";

dotenv.config();

const app = express();
app.use(express.json()); // middleware that parse json data in the body of request
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);

//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "product not found" });
//   }
// });

// APIs
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "somebody");
});
// set root
app.get("/", (req, res) => {
  res.send("Server is ready");
});

// catch errors  in routers
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server at http://localhost:${port}`);
});
