let express = require("express");
const path = require("path");
let db = require("../models");
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
        //db.Books.findAll({where:{
        //    [db.Books.or]:[
        //    {title: req.params.searchItem},
        //    {author: req.params.searchItem}
         //   ]
        //}}).then(function(data) {
         //   let booksItem = {
          //      book: data
            //}
            res.render("search", {title: "search"} );
        //});
    });

    //grabs data from the database that matches a category that the user chooses
    app.get("/search/category/:searchItem", function(req, res) {
        //db.Books.findAll({where:{
        //    category: req.params.searchItem
        //}}).then(function(data) {
        //    let booksItem = {
        //        book: data
        //    }
            res.render("search", {title: "categories"});
        //});
    });

    //grabs data from the database for a specific item
    app.get("/item/:itemId", function(req, res) {
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
    app.get("/cart/:userId", function(req, res) {
        console.log("GET ROUTE cart called");
        //db.Cart.findAll({where:{
        //    id: req.params.userId
        //}}).then(function(data){
        //    let cartItems = {
        //        cart: data
        //    }
        //    
        //});
        res.render("cart",{title: "cart"});
    });
};
