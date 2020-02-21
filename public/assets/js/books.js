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
        //console.log($("#searchBar").val()+" Hello");
        if(!$("#searchBar").val() || 0 === $("#searchBar").val().length){
            location.assign("/search/any");
        }else{
            let searchItem = $("#searchBar").val(); 
            console.log(searchItem);
            location.assign("/search/"+searchItem);
        }
    }

    $("#searchBtn").click(function(event){
        event.preventDefault();
        dbSearch();
    });

    //function to search by category
    function category(btn){
        let searchItem = btn;
        console.log(searchItem);
        location.assign("/search/category/"+searchItem)
    }

    //$(".categoryBtn").click(category(this));

    //function to validate a sign in
    function signIn(){

    }

    //function to call the admin page
    function admin(){
        location.assign("/admin");
    }

    //function to call the cart page
    function cart(){
        location.assign('/cart/'+userId, function(){
            console.log("Front cart called");
        });
    }
    $("#cart").click(cart);

    //function to call the home page
    function homePage(){
        console.log("I work!")
        location.assign('/');
    }

    $("#homePage").click(homePage);

    $("#signIn").click(function(){ console.log("I am properly linked!")});
    //$('button').click(bookSearch);
})