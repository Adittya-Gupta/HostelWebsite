import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/users/users.js"
import adminRouter from "./routes/admin/admin.js"
import dotenv from "dotenv";
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use('/users', userRouter);
app.use('/admin', adminRouter);

const CONNECTION_URL =
  "mongodb+srv://admin:admin12345@cluster0.ngn3mkt.mongodb.net/?retryWrites=true&w=majority";
const PORT = 8080;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
