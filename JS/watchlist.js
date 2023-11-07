// --------------------------------------------------------------------
// When the page loads
    let watchlist = JSON.parse(localStorage.getItem('data'));
    console.log(watchlist)

    $(document).ready(function (){
        console.log(watchlist);
        if (watchlist) {
            showMovies(watchlist);
        } else {
            $(".moviesRow").remove();
            $("#movieContainer").append('<h2 id="empty">No movies in Watchlist...<h2>');
        }

        // API
        // $.ajax({
        //     url: 'https://api.themoviedb.org/3/movie/157336?api_key=4bdfdd167440b11eee82c213da4dd90b&${movies}',
        //     type: 'GET',
        //     dataType: 'json',
        //     success: function(data) {
        //         let movies = data.results;
        //         console.log(movies);
        //         showMovies(movies);
        //     }
        // });

    });

    // Show Movies that were added to the watchlist
    showMovies = (movies) => {
        $(".moviesRow").remove();
    
        const movieContainer = $('#movieContainer')

        movies.forEach(movie => {
            $.ajax({
                url: `https://api.themoviedb.org/3/movie/${movie}?api_key=4bdfdd167440b11eee82c213da4dd90b`,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    let movieData = data;
                    const card =$(`
                    <div class="row" id="moviesRow">
                        <div class="col-12 col-md-6 mb-2 mt-3">
                          <img src="https://image.tmdb.org/t/p/original${movieData.poster_path}" class="card-img watchlist-card-img" data-id='${movieData.id}'>
                        </div>
                        <div class="col-12 col-md-6 mt-3">
                            <div class="card">
                            <div class="card-body">
                                <h3 class="card-title">${movieData.title}</h3>
                                <span class="badge rounded-pill text-bg-secondary">${movieData.genres[0].name}</span>
                                <span class="badge rounded-pill text-bg-secondary">${movieData.genres[1].name}</span>
                                <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Release Date: ${movieData.release_date}</h6>
                                <h6 class="card-subtitle mb-2 text-body-secondary pt-3">Run Time: ${movieData.runtime}</h6>
                                <p class="card-text">${movieData.overview}</p>
                                <button class="btn btn-primary" onclick="movieOpen(${movieData.id})">View</button>
                                <button type="button" class="btn btn-danger m-3" onclick="removeMovie(${movieData.id},this)">Remove from Watchlist</button>
                            </div>
                            </div>
                        </div>
                    </div>`)
                    // card.click(function(){
                    // window.location.href = `../pages/movie.html?id=${$(this).find('.card').attr('data-id')}`;
                    // })
                    console.log(movie);
                    movieContainer.append(card);
                }
            });
        });
    }

    
// --------------------------------------------------------------------
// Remove movie from watch-list

    removeMovie = (id,button) => {
        let arrMovies = watchlist;
        console.log(id)
        $(button).parentsUntil('#movieContainer').remove();
        arrMovies.splice(watchlist.indexOf(id),1);
        console.log(arrMovies);
        localStorage.setItem('data', JSON.stringify(arrMovies));
    }

    movieOpen = (id) => {
        window.location.href = `movie.html?id=${id}`;
    }