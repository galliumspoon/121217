let url = 'http://www.omdbapi.com/?s=deadpool&apikey=5215b3ba'
let movies = []


$.get(url, function(moviesResult) {
  movies = moviesResult.Search
  $(movies).each(function(index){
    $("#heads").append($("<div>").attr("id", this.imdbID))
    $(`#${this.imdbID}`).append($("<img>").attr("id", `poster${index}`).attr("src", this.Poster))
    $(`#${this.imdbID}`).append($("<button>").attr("id", `button${index}`).html(this.Title)
    .click(function (){
      movie = movies[index]
      movieUrl = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=5215b3ba`
      $.get(movieUrl, function(movie) {
        $("#info").html($("<img>").attr("src", movie.Poster))
        .append($("<p>").html(`<b>Year:</b> ${movie.Year}`))
        .append($("<p>").html(`<b>Rated:</b> ${movie.Rated}`))
        .append($("<p>").html(`<b>Released:</b> ${movie.Released}`))
        .append($("<p>").html(`<b>Director:</b> ${movie.Director}`))
      })
    })
  )
})
})
