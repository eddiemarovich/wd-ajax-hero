$('form').submit(function(event) {
  event.preventDefault();
  var $xhr = $.getJSON('https://omdb-api.now.sh/?s=' + $('#search').val());

  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
    }
    console.log(data['Search'])
    movies = data['Search'].map((obj) => {
      return {
        title: obj['Title'],
        poster: obj['Poster'],
        year: obj['Year'],
        id: obj['imdbID']
      }

    })
    renderMovies()
  });

});
