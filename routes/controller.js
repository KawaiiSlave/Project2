let express = require("express");
let router = express.Router();
let db = require("../models");

//Routes the user to frontpage, then fetches data from the books database
router.get("/", function(req, res) {
    res.render("index", {title: "Home Page"});
    //db.Books.findAll({}).then(function(data) {
     //   let booksItem = {
      //      book: data
       // }
       // res.render("index", booksItem);
      //});
});

//Grabs user data from the database in order to verify the user's login
router.get("/login/:username", function(req, res) {
    db.User.findAll({where:{
        username: req.params.username
    }}).then(function(dbUser) {
        res.json(dbUser);
      });
});

//Grabs data from the database that matches the user's search item
router.get("/search/:searchItem", function(req, res) {
    db.Books.findAll({where:{
        [db.Books.or]:[
          {title: req.params.searchItem},
          {author: req.params.searchItem}
        ]
    }}).then(function(data) {
        let booksItem = {
            book: data
        }
        res.render("search", booksItem);
      });
});

//grabs data from the database that matches a category that the user chooses
router.get("/search/category/:searchItem", function(req, res) {
    db.Books.findAll({where:{
          category: req.params.searchItem
    }}).then(function(data) {
        let booksItem = {
            book: data
        }
        res.render("search", booksItem);
      });
});

//grabs data from the database for a specific item
router.get("/item/:itemId", function(req, res) {
    db.Books.findAll({where:{
        id: req.params.itemId
    }}).then(function(data){
        let booksItem = {
            book: data
        }
        res.render("item", booksItem);
    });
});

//grabs data from the database for a user's cart
router.get("/cart/:userId", function(req, res) {
    db.Cart.findAll({where:{
        id: req.params.userId
    }}).then(function(data){
        let cartItems = {
            cart: data
        }
        res.render("cart", cartItems);
    });
});

module.exports = router;
