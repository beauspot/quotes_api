const Quote = require("../models/quotes");

// index routes

// getting all quote routes
const get_all_quote_route = async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
};

// create a new quote route
const post_quote_route = async (req, res) => {
  const newQuote = new Quote(req.body);
  // saving to the db
  const saveQuote = await newQuote.save();

  res.json(saveQuote);
};

// getting a specific quote
const get_specific_quote_route = async (req, res) => {
  const q = await Quote.findById({ _id: req.params.id });
  res.json(q);
};

// deleting a quote route
const delete_quote_route = async (req, res) => {
  const result = await Quote.findByIdAndDelete({ _id: req.params.id });
  res.json(result);
};

// update a specific quotes
const update_quote_route = async (req, res) => {
  const q = await Quote.updateOne({ _id: req.params.id }, { $set: req.body });
  res.json(q);
};

// getting random quote routes
const get_random_quote_route = async (req, res) => {
  const countQuotes = await Quote.countDocuments();
  // logic to get the random quote random
  const randomQuote = Math.floor(Math.random() * countQuotes);
  const getRandomQuote = await Quote.findOne().skip(randomQuote);
  res.json(getRandomQuote);
};
module.exports = {
  get_all_quote_route,
  post_quote_route,
  get_specific_quote_route,
  delete_quote_route,
  update_quote_route,
  get_random_quote_route,
};
