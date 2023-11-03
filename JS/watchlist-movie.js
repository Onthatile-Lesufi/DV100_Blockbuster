// --------------------------------------------------------------------
// When the page loads
$(document).ready(function (){

    // Load in movie information
    let data = JSON.parse(localStorage.getItem(''));
    let movieItems = document.getElementById('');

    for (let i = 0; i < data.length; i++){
        let image = data[i].movieThumb;
        let title = data[i].movieTitle;
        let time = data[i].movieRunTime;
        let caption = data[i].movieCaption;
        let genre = data[i].movieGenre;
        let trailer = data[i].movieTrailer;
        let poster = data[i].moviePoster;
        let poster2 = data[i].moviePoster2;

        movieItems.innerHTML += `
        
        `


    }

    // Load in trailers
    $.ajax({
        url: 'https://api.themoviedb.org/3/movie/11?api_key=4bdfdd167440b11eee82c213da4dd90b',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            let movies = data;
            console.log(movies);
            loadMovies(movies);
        }
    })

    function loadMovies(moviesToShow) {


    
        // load in movies 2?
    
        for (let i = 0; i < moviesToShow.length; i++) {
            const movie = moviesToShow[i];
    
            console.log(trip);
    
            // 1: Select the movie container and add the current movie to it
            $("#movieContainer").append($("#movieWatchCardTemplate").html());
    
            // 2. Create a variable that contains the most recently added movie card
            let currentChild = $("#movieContainer").children().eq(i);
    
            // 3. Set the content for the current trip card from the trip array
            $(currentChild).find("#movieTitle").text(trip.name);
            $(currentChild).find("#amountText").text(trip.price);
            $(currentChild).find("#informationText").text(trip.caption);
            $(currentChild).find("#dateCruise").text(trip.dateOfCruise);
            $(currentChild).find(".card-img-top").attr('src', '../assets/' + trip.image);
    
            
            
        };
    }



})

// --------------------------------------------------------------------
// Remove movie from watch-list

$(document).ready(function(){

    //Remove button click event
    $(document).on("click", ".btn-btn-danger", function(){
        $(this).closest("").remove();
    });
});