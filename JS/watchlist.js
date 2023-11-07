// --------------------------------------------------------------------
// When the page loads

    $(document).ready(function (){

        // API
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/157336?api_key=4bdfdd167440b11eee82c213da4dd90b&append_to_response=videos,images',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                let movies = data.results;
                console.log(movies);
                showMovies(movies);
            }
        }) .done(function(){
            $("#moviesRow").html();
        })

    })

    // Show Movies that were added to the watchlist
    function showMovies() {


    }

    showMovies = (movies) => {

        // Get the movie information form storage
        let data = JSON.parse(localStorage.getItem('data-results'));
        let movie = document.getElementById('data-id');
        $('moviesRow').empty();

        for(let i = 0; i < 0; i++){
            const card = $ (`
            <div class="col-12 col-md-6 mb-2 mt-3">
              <img src="https://image.tmdb.org/t/p/original${movies[i].poster_path}" class="card-img watchlist-card-img" data-id='${movie.id}'>
            </div>
            <div class="col-12 col-md-6 mt-3">
                <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${movies[i].title}</h3>
                    <span class="badge rounded-pill text-bg-secondary">${movies[i].genres}</span>
                    <span class="badge rounded-pill text-bg-secondary">${movies[i].genres}</span>
                    <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Release Date: ${movies[i].release_date}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Run Time: ${movies[i].runtime}</h6>
                    <p class="card-text">${movies[i].overview}</p>
                    <a href="../pages/movie.html" class="btn btn-primary">View</a>
                    <button type="button" class="btn-btn-danger m-3">Remove from Watchlist</button>
                </div>
                </div>
            </div>
            `) 
            $('#moviesRow').append(card);
        
        }
    }

        // Store id's from added page(s)


// --------------------------------------------------------------------
// Remove movie from watch-list

$(document).ready(function(){

    //Remove button click event
    $(document).on("click", ".btn-btn-danger", function(){
        $(this).closest(".col-12").remove(".col-12");
        $(this).closest(".card-img").remove();
    });
});

// --------------------------------------------------------------------
// Store ID's of the selected movies


