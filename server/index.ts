import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import short from "short-uuid";
import { UrlModel } from "./models/url";

const app = express();

app.use(cors());
app.use(bodyParser());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://127.0.0.1:27017").then((res) => {
  app.post("/short", async (req, res) => {
    const { url } = req.body;

    await UrlModel.create({
      url: short.generate(),
    });
    res.json({ ok: true });
  });

  app.listen(3000);
});
