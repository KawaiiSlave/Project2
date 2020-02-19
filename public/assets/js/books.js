$(function(){
    let userId = 0;
    function bookSearch( ){
        var search = document.getElementById('search').value
        document.getElementById('results').innerHTML = ""
        document.getElementById('img').innerHTML = ""
        console.log(search)

        $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
            type: "GET",
            dataType: "json",
            success: function(data) {
                for( i = 0; i < data.items.length; i++){
                    results.innerHTML += "<h3>" + data.items[i].volumeInfo.title + "</h3>",
                    results.innerHTML += "<h4>" + data.items[i].volumeInfo.publishedDate + "</h4>"
                    results.innerHTML += "<h5>" + data.items[i].volumeInfo.authors + "</h5>"
                    results.innerHTML += "<h6>" + data.items[i].volumeInfo.categories + "</h6>"
                
                }
                console.log(data)
            },
        });
    }

    //function to call search results from the db
    function dbSearch(){
        let searchItem = $("#searchBar").val();
        console.log(searchItem);
        $.ajax({
            url: "/search/"+searchItem,
            type: "GET",
            success: console.log("search called!")

        },
        error = function(XMLHttpRequest, textStatus, errorThrown) {
           alert("some error");
        });
    }

    $("#searchBtn").click(function(event){
        event.preventDefault();
        dbSearch();
    });

    //function to validate a sign in
    function signIn(){

    }

    //function to call the admin page
    function admin(){
        $.ajax({
            url: "/admin",
            type: "GET",
            dataType: "json",
            success: console.log("admin called!")
        });
    }

    //function to call the cart page
    function cart(){
        $.ajax({
            url: "/cart/"+userId,
            type: "GET",
            dataType: "json",
            success: console.log("cart called!")
        });
    }
    $("#cart").click(cart);

    //function to call the home page
    function homePage(){
        console.log("I work!")
        $.ajax({
            url: "/",
            type: "GET",
            dataType: "json",
            success: console.log("homepage called!")
        });
    }

    homePage();

    $("#homePage").click(homePage);

    $("#signIn").click(function(){ console.log("I am properly linked!")});
    //$('button').click(bookSearch);
})