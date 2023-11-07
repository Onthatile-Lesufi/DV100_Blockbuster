// --------------------------------------------------------------------
// When the page loads

    $(document).ready(function (){

        // API
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/157336?api_key=4bdfdd167440b11eee82c213da4dd90b&${movies}',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                let movies = data.results;
                console.log(movies);
                showMovies(movies);
            }
        });

    });

    // Show Movies that were added to the watchlist
    function showMovies() {
        const apiUrl = `https://api.themoviedb.org/3/movie/157336?api_key=4bdfdd167440b11eee82c213da4dd90b${movies}`;

        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                let movies = data;
                console.log(movies);
                showMovies(movies);
                
            },
            error: function(error){
                console.log('Error:', error);
            }
        }) .done(function(){
            $("#moviesRow").html();
        })

    }


    function showMovies() {
    
        const movieContainer = $('#movieContainer')

        movies.forEach(movies => {
            const card =$(`
            <div class="col-12 col-md-6 mb-2 mt-3">
              <img src="https://image.tmdb.org/t/p/original${movies[i].image}" class="card-img watchlist-card-img" data-id='${movie.id}'>
            </div>
            <div class="col-12 col-md-6 mt-3">
                <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${movies[i].title}</h3>
                    <span class="badge rounded-pill text-bg-secondary">${movies[i].genres}</span>
                    <span class="badge rounded-pill text-bg-secondary">${movies[i].genres}</span>
                    <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Release Date: ${movies[i].release}</h6>
                    <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Run Time: ${movies[i].runtime}</h6>
                    <p class="card-text">${movies[i].description}</p>
                    <a href="../pages/movie.html" class="btn btn-primary">View</a>
                    <button type="button" class="btn-btn-danger m-3">Remove from Watchlist</button>
                </div>
                </div>
            </div>`)

            card.click(function(){
                window.location.href = `../pages/movie.html?id=${$(this).find('.card').attr('data-id')}`;
            }) 
                
        
            console.log(movies);
            movieContainer.append(card);
        });

        // Older Code Below

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
// Save movie information to localStorage

$(document).ready(function(){
    //Save information to storage
    const movies = $('#movieContainer').val();

    //Store data 
    localStorage.setItem('movies', movies);

});

