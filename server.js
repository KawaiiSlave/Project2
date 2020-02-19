const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require('./routes/controller')
app.use('/routes',routes);

// Each of the below routes just handles the HTML page that the user gets sent to.
  app.get("/", function(req, res) {
      res.render("index", {title: "Home Page"});
});

  app.get("/book", function(req, res) {
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


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });












