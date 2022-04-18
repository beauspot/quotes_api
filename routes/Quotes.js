const express = require("express");
const router = express.Router();
//const Quote = require("../models/quotes"); // importing the quote model
const {
  get_all_quote_route,
  post_quote_route,
  get_specific_quote_route,
  delete_quote_route,
  update_quote_route,
  get_random_quote_route,
} = require("../controllers/quotes_ctrl");

// getting all quote routes
router.get("/", get_all_quote_route);

// Create a new quote route.
router.post("/new", post_quote_route);

// getting a specific quote
router.get("/get/:id", get_specific_quote_route);

// deleting quote.
router.delete("/delete/:id", delete_quote_route);

// update a specific quotes
router.patch("/update/:id", update_quote_route);

// getting a randome quote
router.get("/random", get_random_quote_route);

module.exports = router;
