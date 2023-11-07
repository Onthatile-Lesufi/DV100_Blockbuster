$(document).ready(function () {
    $.ajax({
        url: 'https://api.themoviedb.org/3/trending/movie/week?api_key=33a910bf405b0e95e4f78d2f4f9b1567&primary_release_date=1990-10-12',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadRatedCards(movies,"TRENDING");
        } 
    })

    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=33a910bf405b0e95e4f78d2f4f9b1567&primary_release_date=1990-10-12',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadMovieCards(movies);
        } 
    })
})

loadRatedCards = (movies, title) => {
    $('#ratedRow').empty();
    for (let i = 0; i<8; i++) {
        const card = $(`
        <div class="col-6 col-xs-6 col-sm-6 col-md4 col-lg-3" id='movieCard'>
            <div class="card" data-id='${movies[i].id}'>
                <img src="https://image.tmdb.org/t/p/original${movies[i].poster_path}" class="card-img-top" alt="movie.png">
                <div class="card-body">
                    <h3 class="card-title" id="nameText">${movies[i].title}</h3>
                    <p class="ratings">Rating: ${movies[i].vote_average}</p>
                </div>
            </div>
        </div>`)

        $('#ratedRow').append(card);
    }

    $("#best-movies").text(title+" MOVIES");

    $('#ratedRow').on('click','#movieCard',function(){
        window.location.href = `../pages/movie.html?id=${$(this).find('.card').attr('data-id')}`;
    })
}

loadMovieCards = (movies) => {
    $('#movieRow').empty();
    
    movies.forEach(movie =>{
        const card = $(`
        <div class="col-6 col-xs-6 col-sm-6 col-md4 col-lg-3" id='movieCard'>
            <div class="card" data-id='${movie.id}'>
                <img src="https://image.tmdb.org/t/p/original${movie.poster_path}" class="card-img-top" alt="movie.png">
                <div class="card-body">
                    <h3 class="card-title" id="nameText">${movie.title}</h3>
                </div>
            </div>
        </div>`)
        $('#movieRow').append(card);
    });

    $('#movieRow').on('click','#movieCard',function(){
        window.location.href = `../pages/movie.html?id=${$(this).find('.card').attr('data-id')}`;
    })
}

filterChange = (filter) => {
    let filterString = $(filter).attr("data-filter");
    let title = $(filter).text();
    console.log("poi");
    $.ajax({
        url: `https://api.themoviedb.org/3/movie/${filterString}?api_key=33a910bf405b0e95e4f78d2f4f9b1567&primary_release_date=1990-10-12`,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadRatedCards(movies,title);
        } 
    })
}