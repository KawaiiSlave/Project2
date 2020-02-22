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
        db.Book.destroy({where:{
            id: req.params.itemId
        }}).then(function(dbBooks){
            res.json(dbBooks);
        });
    });

    //routing that allows the user to add a selected item to their cart
    app.post("/api/cart", function(req, res) {
      db.Cart.create({
        title: req.body.title,
        author_name: req.body.author_name,
        quantity: req.body.quantity,
        book_id: req.body.book_id,
        user_id: req.body.user_id
      }).then(function(dbCart){
        res.json(dbCart);
      });
    });

    //routing that allows the user to delete an item from their cart
    app.delete("/api/cart/:id",function(req, res) {
      db.Cart.destroy({where:{
        id: req.params.id
      }}).then(function(dbCart){
        res.json(dbCart);
      });
    });

    //routing that allows the user to update an item in their cart
    app.put("/api/cart/:id", function(req, res) {
      db.Cart.create({where:{
        id: req.params.id
      }}).then(function(dbCart){
        res.json(dbCart);
      });
    });
}


