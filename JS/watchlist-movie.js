// --------------------------------------------------------------------
// When the page loads

    // Load in trailers, etc.
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/11?api_key=4bdfdd167440b11eee82c213da4dd90b',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadMovies(movies);
        }
    })

$(document).ready(function (){

    // Load in movie information
    let data = JSON.find('#movieCard');
    let movieItems = document.getElementById('');



})

// --------------------------------------------------------------------
// Remove movie from watch-list

$(document).ready(function(){

    //Remove button click event
    $(document).on("click", ".btn-btn-danger", function(){
        $(this).closest("").remove();
    });
});