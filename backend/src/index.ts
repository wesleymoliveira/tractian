import express, { Application } from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    const app: Application = express();

    app.use(cors());
    app.use(express.json());
    app.use(routes);

    app.listen(3333, () => console.log("O Servidor está rodando"));
  });
