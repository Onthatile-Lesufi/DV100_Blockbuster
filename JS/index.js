$(document).ready(function () {
    

    $.ajax({
        url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=33a910bf405b0e95e4f78d2f4f9b1567&primary_release_date=1990-10-12',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data.results;
            console.log(movies);
            loadMovieCards(movies);
        } 
    })


    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/now_playing?api_key=33a910bf405b0e95e4f78d2f4f9b1567',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#carouselInner').empty();
            let movies = data.results;
            console.log(movies);
            console.log(movies[1]);
            for (let i=0;i<=2;i++){
                console.log(movies[i]);
                let added;
                let watchlist = JSON.parse(localStorage.getItem('data'));
                if (!(watchlist)) {                    
                    added = "Add to watchlist"
                } else {
                    let movieID = movies[i].id;
                    if ((watchlist.indexOf(+movieID) >= 0)) {
                        added = "Already in watchlist"
                    } else {
                        added = "Add to watchlist"
                    }
                }
                let hero = $(`
                <div class="carousel-item" id='carouselItem'>
                    <img src="https://image.tmdb.org/t/p/original${movies[i].backdrop_path}" class="d-block w-100 slide-img" alt="...">
                    <div class="overlay">
                        <h2 class="title">${movies[i].title}</h2>
                        <p class="description">${movies[i].overview}</p>
                        <!--<p class="cast">Director: <br>Cast: </p>-->
                        <div class="button-group">
                            <div id='info' data-id='${movies[i].id}'><h3>More Info</h3></div>
                            <div id="watchlist" data-id='${movies[i].id}' onclick='addToWatchlist(this)'><h3>${added}</h3></div>
                        </div>
                    </div>
                </div>`)

                if (i === 0) {
                    hero = $(`
                    <div class="carousel-item active" id='carouselItem'>
                        <img src="https://image.tmdb.org/t/p/original${movies[i].backdrop_path}" class="d-block w-100 slide-img" alt="...">
                        <div class="overlay">
                            <h2 class="title">${movies[i].title}</h2>
                            <p class="description">${movies[i].overview}</p>
                            <!--<p class="cast">Director: <br>Cast: </p>-->
                            <div class="button-group">
                                <div id='info' data-id='${movies[i].id}' onclick='infoOpen(this)'><h3>More Info</h3></div>
                                <div id="watchlist" data-id='${movies[i].id}' onclick='addToWatchlist(this)'><h3>${added}</h3></div>
                            </div>
                        </div>
                    </div>`)
                }
                $('#carouselInner').append(hero);
            }
        }
    })
})

infoOpen = (id) => {
    let movieID = $(id).attr("data-id");
    console.log('test')
    window.location.href = `pages/movie.html?id=${movieID}`;
}

addToWatchlist = (id) => {
    let watchlist = JSON.parse(localStorage.getItem('data'));
    let movieID = $(id).attr("data-id");
    if (!watchlist) {
        localStorage.setItem('data', JSON.stringify([+movieID]));
    } else {
        let arrMovies = watchlist;
        console.log(arrMovies);
        if (arrMovies.indexOf(+movieID) < 0) {
            arrMovies.push(+movieID);
        }
        console.log(arrMovies);
        localStorage.setItem('data', JSON.stringify(arrMovies));
    }
    $(id).empty();
    $(id).append(`<h3>Already in watchlist</h3>`)
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
        window.location.href = `pages/movie.html?id=${$(this).find('.card').attr('data-id')}`;
    })
}
/////////////////////////////////////////////////////////////////////////
///////////sign up page and sign in page//////////
$(document).ready(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        if (this.checkValidity() === false) {
            event.stopPropagation();
        } else {
            const password = $('#password').val();
            if (isPasswordValid(password)) {
                this.submit(); // Continue form submission if password is valid
            } else {
                $('#password-error').text('Password must contain at least one capital letter and one number.');
                $('#password').addClass('is-invalid');
            }
        }
        $(this).addClass('was-validated');
    });

    function isPasswordValid(password) {
        // Define a regular expression to check for a capital letter and a number
        const regex = /^(?=.*[A-Z])(?=.*\d)/;
        return regex.test(password);
    }
});

  $(document).ready(function(){
    //sign in form
    $('#sign-up-form').submit(function(event){
        event.preventDefault();

        if(this.checkValidity() === false){
            event.stopPropagation();

        } else {
            //redirect to index
            window.location.href = '../index.html';

            //save info to local storage
            const username = $('#username').val();
            const password = $('#password').val();

            //store data too
            localStorage.setItem('username',username );
            localStorage.setItem('password',password );

        }

        $(this).addClass('was-validated');
    });
  });

  $(document).ready(function() {
    const username = localStorage.getItem('username');
    if (username) {
        $('.nav-link.profile').text(username);
    }
});
