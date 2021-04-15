define( function() {

    var internals = {};
    var externals = {};

    internals.load = function(movies, container){

        //internals.data = [];

        for(i = 0; i < movies.length; i++){

            var movie = movies[i];

            //internals.data.push(movie);

            //console.log(movie.title);

            var thisCard = $('<div>').attr('class', 'col-sm-6')
                .append($('<div>').attr('id', movie.id).attr('class', 'card ')
                    .append($('<div>').attr('class', 'card-body')
                        .append($('<a>').attr('href', movie.url)
                            .append($('<h5>').attr('class', 'card-title text-white bg-dark').text(movie.title)))
                        .append($('<p>').attr('class', 'card-text').text(movie.original_title))
                        .append($('<p>').attr('class', 'card-text description').text(movie.description))));

            
            container.append(thisCard);
        }

    }

    internals.search = function() {
        var query = $('#search-query').val();
        console.log(query)

        if(query){
            var filteredArray = internals.data.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
        } else {
            var filteredArray = internals.data;
        }

        internals.load(filteredArray, $('#container').empty());
        console.log(filteredArray[0].title);
        
    }

    

    externals.more = function(movies){

        var container = $('#container');

        internals.load(movies, container);

    }


    

    externals.show = function(movies, loadMore) {
        //console.log(movies)


        var container = $('#container').empty();
        internals.load(movies, container);
        internals.data = movies;

        $('#load-more').click(loadMore);
        $('#search').click(internals.search);
        $('#search-query').on('change', internals.search);

    }

    return externals;
})