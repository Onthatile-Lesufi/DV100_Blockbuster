// --------------------------------------------------------------------
// When the page loads
$(document).ready(function (){
    const urlParams = new URLSearchParams(window.location.search);
    const dataId = urlParams.get('data-id');

    if(dataId) {
        getMovieDetails(dataId);
    } else {
        // Show error

    }
});

function getMovieDetails(movieId) {
    const apiUrl = `https://api.themoviedb.org/3/movie/157336?api_key=4bdfdd167440b11eee82c213da4dd90b${movieId}`;

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {

            const movie = data.movie[0];
        
            console.log(data);

            $('#movieTitle').text(movie.original_title);
            $('#movieRunTime').text(movie.runtime);
            $('#movieDescription').text(movie.overview);
            $('#movieGenre1').text(movie.genres);
            $('#movieGenre2').text(movie.genres);
            $('#movieImage').attr('src', movie.poster_path);
            $('#movieSideImage1').attr('src', movie.backdrop_path);
            $('#movieSideImage2').attr('src', movie.backdrop_path);
            $('#movieSideImage3').attr('src', movie.backdrop_path);
        },
        error: function(error){
            console.log('Error:', error);
        }
    }) 

}

// Older Code Below

$(document).ready(function (){

    // Load in trailers, etc.
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/{movie id}?api_key=4bdfdd167440b11eee82c213da4dd90b',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadMovies(movies);
        }
    })

    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/{movie id}?api_key=4bdfdd167440b11eee82c213da4dd90b',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadMoviePosters(movies);
        }
    })


});   

    // --------------------------------------------------------------------
    // Add to watchlist

    $(document).ready(function(){

        //Add to watchlist button click event
        $(document).on("click", ".btn-btn-primary", function(){
            let data =JSON.stringify(movie);
            localStorage.setItem('movie', data);
            $(this).console.log();
        });
    });


