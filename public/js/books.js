 $("#getButton").on("click", function(event) {
        event.preventDefault();
        let authorName = $("#authorTextbox").text();
        let titleName = $("#titleTextbox").text();


        $.ajax("/api/booksearch", {
            method: "GET"
        }).then(function(response) {
            console.log(response);
    });

});

 
