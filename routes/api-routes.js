var Book = require("../models/book.js");
var axios = require("axios");
// Routes
// =============================================================
module.exports = function(app) {
  // Get all books
  app.get("/api/booksearch", function(req, res) {
      axios.get("https://www.goodreads.com/search.xml?key=HER3irixwdL4F1V9kfig&q=harrypotter")
        .then(function(res){
            console.log(res);
        })  
      })
  };


