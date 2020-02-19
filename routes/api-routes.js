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

$("#searchBtn").click(function() {
    outputList.innerHTML = ""
    searchData = $("#searchBar").val();
    //if search bar is empty
    if(searchData === "" || searchData === null) {
        displayError
    } 
    else {
        $.ajax({
            url: bookUrl + searchData,
            datatype: "json",
            success: function(res) {
                console.log(res)
                if(response.totalItem === 0) {
                    alert("no results..try again!");
                }
                else {
                    $("title").anitem({'margin-top: 10px'});
                    $("book-list").css('visibility: visible');
                    displayResults(res);
                }
            }
            error: function() {
                alert("Something went wrong!...");
            }
        })
    }
    $.("#searchBar").val("");
  })
})

