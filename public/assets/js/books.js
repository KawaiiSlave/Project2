$(function(){
    let userId = 1;

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
    $(".categoryBtn").on("click", function(event) {
        let cat = $(this).text().trim();
        console.log(cat);
        category(cat);
    });

    //function to show the page for a particular item
    function item(btn){
        let searchItem = btn;
        location.assign("/item/"+searchItem)
    }
    $(".itemBtn").on("click", function(event) {
        let itemVar = $(this).data("id");
        descriptionCall($(this).text());
        console.log(itemVar);
        item(itemVar);
    });

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
        location.assign('/');
    }

    $("#homePage").click(homePage);

    $("#signIn").click(function(){ console.log("I am properly linked!")});
    //$('button').click(bookSearch);

    function descriptionCall(title){
        console.log(title);
        let key = "RpVA17xyVHAld7H5pTkfAKKERTZy3LVY";
        title = title.replace(/ /g,"+");
        let queryUrl = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" + title +"&api-key="+key;
        console.log(queryUrl);
        $.ajax({
            url: queryUrl,
            type: "GET"
         }).then(function(response) {
            console.log(response);
            if(response.results){
                $("#descContainer").text(response.results.summary);
            }
            }
    )};
    

    //function delete a book from the cart
    function cartDelete(id){
        $.ajax("/api/cart/" + id, {
            type: "DELETE"
            }).then(
            function() {
                console.log("deleted book", id);
                location.reload();
            }
            );
    }
    $(".delete").click(function(){
        let id = $(this).data("id");
        cartDelete(id)
    })

    //function to add a book to the cart
    function cartAdd(newBook){
        $.ajax("/api/cart", {
            type: "POST",
            data: newBook
          }).then(
            function() {
              console.log("added a new book to your cart");
            }
          );
    }

    $(".addBtn").click(function(){
        let bookData = {
            title: $(this).data("title"),
            author_name: $(this).data("author"),
            quantity: 1,
            book_id: $(this).data("id"),
            user_id: userId
        }
        console.log(bookData);
        cartAdd(bookData);
    });
})