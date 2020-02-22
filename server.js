const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const exphbs = require("express-handlebars");
let db = require("./models")


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/controller.js")(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    });
})

  












