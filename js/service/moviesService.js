define(function(){

    var internals = {};
    var externals = {};

    internals.fetchMovieList = function(){
        return fetch('https://ghibliapi.herokuapp.com/films?limit=3');
    }

    externals.getList = function(){
        return internals.fetchMovieList();
    }

    return externals;
})