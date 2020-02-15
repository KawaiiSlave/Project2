let express = require("express");

let router = express.Router();

let db = require("../models");

router.get("/", function(req, res) {
    db.Books.findAll({}).then(function(data) {
        let booksItem = {
            book: data
        }
        res.render("index", booksItem);
      });
});

router.get("/login/:username", function(req, res) {
    db.Users.findAll({where:{
        username: req.params.username
    }}).then(function(dbUser) {
        res.json(dbUser);
      });
});

router.get("/search/:searchItem", function(req, res) {
    db.Books.findAll({where:{
        [Books.or]:[
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

router.post("/api/books", function(req, res) {
  
});

router.put("/api/books/:id", function(req, res) {
 
});

router.delete("/api/books/:id", function(req, res) {
    db.Books.destroy({where:{
        id: req.params.itemId
    }}).then(function(dbBooks){
        res.json(dbBooks);
    });
});

module.exports = router;