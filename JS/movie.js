// --------------------------------------------------------------------
// When the page loads
const urlParams = new URLSearchParams(window.location.search);
const dataId = urlParams.get('id');

$(document).ready(function (){
    if(dataId) {
        console.log(dataId);
        getMovieDetails(dataId);
    } else {
        $("#movieContainer").empty();
        $("#movieContainer").append('<h2 id="empty">404<br>No movie found...<h2>');
    }
});

function getMovieDetails(movieId) {
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=4bdfdd167440b11eee82c213da4dd90b`;

    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {

            const movie = data;
        
            console.log(movie);

            $('#movieTitle').text(movie.original_title);
            $('#movieRunTime').text(movie.runtime +" Minutes");
            $('#movieDescription').text(movie.overview);
            $('#movieGenre1').text(movie.genres[0].name);
            if (movie.genres.length > 1) {
                $('#movieGenre2').text(movie.genres[1].name);
            }
            $('#movieImage').attr('src', "https://image.tmdb.org/t/p/original"+movie.poster_path);
            $('#movieSideImage1').attr('src', "https://image.tmdb.org/t/p/original"+movie.poster_path);
            $('#movieSideImage2').attr('src', "https://image.tmdb.org/t/p/original"+movie.backdrop_path);
            $('#movieSideImage3').attr('src', movie.backdrop_path);
        },
        error: function(){
            $("#movieContainer").empty();
            $("#movieContainer").append('<h2 id="empty">404<br>No movie found...<h2>');
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
        let added;
        let watchlist = JSON.parse(localStorage.getItem('data'));
        if (!(watchlist)) {                    
            added = "Add to watchlist"
        } else {
            if ((watchlist.indexOf(dataId) >= 0)) {
                added = "Already in watchlist"
            } else {
                added = "Add to watchlist"
            }
        }
        $("#watchlistAddButton").text(added)
    });

    addToWatchlist = () => {
        let watchlist = JSON.parse(localStorage.getItem('data'));
        if (!watchlist) {
            localStorage.setItem('data', JSON.stringify([dataId]));
        } else {
            let arrMovies = watchlist;
            console.log(arrMovies);
            if (arrMovies.indexOf(dataId) < 0) {
                arrMovies.push(dataId);
            }
            console.log(arrMovies);
            localStorage.setItem('data', JSON.stringify(arrMovies));
        }
        $("#watchlistAddButton").empty();
        $("#watchlistAddButton").text(`Already in watchlist`)
    }


