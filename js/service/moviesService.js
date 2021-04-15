define(function(){

    var internals = {};
    var externals = {};

    internals.fetchMovieList = function(category){
        return fetch(`https://ghibliapi.herokuapp.com/${category}?limit=250`);
    }

    externals.getList = function(category){
        return internals.fetchMovieList(category);
    }

    return externals;
})