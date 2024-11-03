import mongoose from "mongoose";

const schema = new mongoose.Schema({
  url: String,
});

export const UrlModel = mongoose.model("Url", schema);
