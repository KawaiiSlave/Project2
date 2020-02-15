$(function(){
    $(".search").on("click", function(event) {
        event.preventDefault();
        let searchItem = $(".searchItem").text();

        $.ajax("/search/" + searchItem, {
            type: "GET"
            }).then(
        );
    });
});