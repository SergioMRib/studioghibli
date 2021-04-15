define( function() {

    var internals = {};
    var externals = {};

    internals.load = function(movies, container){

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

    externals.more = function(movies){

        var container = $('#container');

        internals.load(movies, container);

    }


    

    externals.show = function(movies, loadMore) {
        console.log(movies)

        var container = $('#container').empty();
        internals.load(movies, container);
     
        $('#load-more').click(loadMore);

    }

    return externals;
})