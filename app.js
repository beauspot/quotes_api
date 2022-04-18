const app = require("express")();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const QuotesRoute = require("./routes/Quotes");


// Setting up nosql db connection
mongoose.connect("mongodb://localhost/motivation");

// testing connection
const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to mongodb...");
});

// middleware
app.use(bodyParser.json());

// Quotes routes
app.use("/quotes", QuotesRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
