const mongoose = require("mongoose");

// creating a schema
const QuotesSchema = new mongoose.Schema({
  content: String,
  author: String,
});

// creating a model from the schema
module.exports = mongoose.model("Quote", QuotesSchema);
