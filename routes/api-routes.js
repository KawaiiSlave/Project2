let express = require("express");
const path = require("path");
let db = require("../models");
module.exports = function(app){
  //routing that allows the admin to add new books 
    app.post("/api/books", function(req, res) {
    
    });
    
  //routing that allows the admin to update a book  
    app.put("/api/books/:id", function(req, res) {
    
    });
    
  //routing that allows the admin to delete a selected book
    app.delete("/api/books/:id", function(req, res) {
        db.Books.destroy({where:{
            id: req.params.itemId
        }}).then(function(dbBooks){
            res.json(dbBooks);
        });
    });
}


