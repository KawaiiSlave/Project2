let express = require("express");

let router = express.Router();

let books = require("../models/books.js");
let cart = require("../models/cart.js");
let user = require("../models/user.js");

router.get("/", function(req, res) {
 
});

router.post("/api/books", function(req, res) {
  
});

router.put("/api/books/:id", function(req, res) {
 
});

router.delete("/api/books/:id", function(req, res) {
 
});

module.exports = router;
