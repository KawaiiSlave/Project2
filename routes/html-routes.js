
const path = require("path");
module.exports = function(app) {}

  // Each of the below routes just handles the HTML page that the user gets sent to.

app.get("/", function(req, res) {
res.render("index", {title: "Home Page"});

});



app.get("/books", function(req, res) {
res.render("item", {title: "Card catalogue"});

});



app.get("/cart", function(req, res) {
res.render("cart", {title: "Your cart"});

});



app.get("/admin", function(req, res) {
res.render("admin", {title: "Administrator"});

});



app.get("/search", function(req, res) {
res.render("search", {title: "Searching through tomes"});

});


