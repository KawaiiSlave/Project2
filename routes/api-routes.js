let express = require("express");
let router = express.Router();
let db = require("../models");

//routing that allows the admin to add new books 
  router.post("/api/books", function(req, res) {
  
  });
  
//routing that allows the admin to update a book  
  router.put("/api/books/:id", function(req, res) {
   
  });
  
//routing that allows the admin to delete a selected book
  router.delete("/api/books/:id", function(req, res) {
      db.Books.destroy({where:{
          id: req.params.itemId
      }}).then(function(dbBooks){
          res.json(dbBooks);
      });
  });



