// --------------------------------------------------------------------
// When the page loads

$(document).ready(function (){

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

        // Get the movie information form storage
        loadMovies = (movies) => {

           
            let data = JSON.parse(localStorage.getItem('data-results'));
            let movie = document.getElementById('#moviesRow');
            $('moviesRow').empty();

            for(let i = 0; i < 0; i++){
                const card = $ (`
                <div class="col-12 col-md-6 mb-3 mt-5">
                    <div class="right-card mt-5">
                        <div class="card mb-3" style="width: 100%;">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="https://image.tmdb.org/t/p/original${movies[i].poster_path}" class="img-fluid rounded-start right-img" alt="...">
                                    <a href="../pages/watchlist.html" class="btn btn-primary" style="margin-left: 10px; margin-top: 20px; font-size: larger;">Back</a>
                                </div>
                                
                                <div class="col-md-8">
                                    
                                    <div class="card-body">
                                        <h3 class="card-title">${movies[i].title}</h3>
                                        <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Run Time: ${movies[i].runtime}</h6>
                                        <p class="card-text">${movies[i].overview}</p>
                                        <span class="badge rounded-pill text-bg-secondary">${movies[i].genres}</span>
                                        <span class="badge rounded-pill text-bg-secondary">${movies[i].genres}</span>
                                        
                                    </div>
                                    <button class="btn btn-primary m-3">Watch Now</button>
                                    <button type="button" class="btn-btn-primary m-3">Add to Watchlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `) 
            $('#moviesRow').append(card);
        
        }


        }
        // Store id's from added page(s)

        // Get id's for movie information

        // Get id's for posters

    })

    // --------------------------------------------------------------------
    // Add to watchlist


