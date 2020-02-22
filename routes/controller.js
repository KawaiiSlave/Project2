let express = require("express");
const path = require("path");
let db = require("../models");
const { Op } = require("sequelize");
module.exports = function(app){

    //Routes the user to frontpage, then fetches data from the books database
    app.get("/", function(req, res) {
        res.render("index", {title: "Home Page"});
        //db.Books.findAll({}).then(function(data) {
        //   let booksItem = {
        //      book: data
        // }
        // res.render("index", booksItem);
        //});
    });

    //Grabs user data from the database in order to verify the user's login
    app.get("/login/:username", function(req, res) {
        db.User.findAll({where:{
            username: req.params.username
        }}).then(function(dbUser) {
            res.json(dbUser);
        });
    });

    //Grabs data from the database that matches the user's search item
    app.get("/search/:searchItem", function(req, res) {
        db.Book.findAll({where:{
            [Op.or]:[
                {title: req.params.searchItem},
                {author_name: req.params.searchItem}
            ]
        }}).then(function(data) {
            let booksItem = {
                book: data
            }
            res.render("search", {title: "search",books: booksItem.book} );
        });
    });

    //grabs data from the database that matches a category that the user chooses
    app.get("/search/category/:searchItem", function(req, res) {
        db.Book.findAll({where:{
            category: req.params.searchItem
        }}).then(function(data) {
           let booksItem = {
                book: data
            }
            res.render("search", {title: req.params.searchItem,books: booksItem.book});
        });
    });

    //grabs data from the database for a specific item
    app.get("/item/:itemId", function(req, res) {
        db.Book.findOne({where:{
            id: req.params.itemId
        }}).then(function(data){
            let booksItem = {
                book: data.dataValues
            }
            res.render("item", {title: booksItem.book.title, book: booksItem.book, description: "Coming soon"});
        });
    });

    //grabs data from the database for a user's cart
    app.get("/cart/:userId", function(req, res) {
        console.log("GET ROUTE cart called");
        db.Cart.findAll({where:{
            user_id: req.params.userId
        }}).then(function(data){
            let cartItems = {
                cart: data
            } 
            res.render("cart",{title: "cart",cart: cartItems.cart});
        });
        
    });
};
