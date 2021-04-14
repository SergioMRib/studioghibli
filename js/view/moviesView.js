define( function() {

    var externals = {};

    externals.show = function(movies) {
        console.log(movies)

        var container = $('#container').empty();

        for(i = 0; i < movies.length; i++){
            var movie = movies[i];
            console.log(movie.title);

            var thisCard = $('<div>').attr('class', 'col-sm-6').append($('<div>').attr('id', movie.id).attr('class', 'card border-primary')
                .append($('<div>').text(movie.release_date).attr('class', 'card-header'))
                .append($('<div>').attr('class', 'card-body')
                    .append($('<h5>').attr('class', 'card-title').text(movie.title))
                    .append($('<p>').attr('class', 'card-text').text(movie.producer))
                    .append($('<p>').attr('class', 'card-text').text(movie.original_title))
                    .append($('<p>').attr('class', 'card-text').text(movie.original_title_romanized))))
            
            container.append(thisCard);
        }
    }

    return externals;
})