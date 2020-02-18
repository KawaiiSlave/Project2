$(document).ready(function() {
    let item, title, author, publisher, bookLink, bookImg
    let outputList = document.getElementById("results");
    let bookUrl = "https://www.googleapis.com/books/v1/volumes?q="
    let placeHldr = '<img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fdonrheem.com%2Fwp-content%2Fuploads%2F2016%2F11%2FBook-Placeholder.png&imgrefurl=https%3A%2F%2Fdonrheem.com%2Fbook-placeholder%2F&tbnid=x5ez9pErAsfmjM&vet=12ahUKEwjw4NT5o9rnAhWCa6wKHcK_CH0QMygAegUIARDLAQ..i&docid=2oUlLh-3TomvlM&w=424&h=625&q=placeholder%20image%20for%20book&ved=2ahUKEwjw4NT5o9rnAhWCa6wKHcK_CH0QMygAegUIARDLAQ">'
    let searchData;


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

