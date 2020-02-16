
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

document.getElementById('button').addEventListener('click', bookSearch, false)