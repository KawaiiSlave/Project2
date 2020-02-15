const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./routes/controller.js");
app.use(routes);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
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
    res.render("search", {title: "Searching for books"});
});


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });












