define( function() {
    
    var internals = {};
    var externals = {};

    internals.routes = {
        movies: { hash: '#movies', controller: 'moviesController'}
    }

    internals.defaultRoute = internals.routes.movies;

    internals.initController = function(route){
        require(['controller/' + route.controller], function(controller){
            controller.init();
        })
    }

    internals.getRoute = function() {
        return Object.values(internals.routes).find(function(route) {
            return route.hash === window.localStorage.hash;
        });
    }

    externals.init = function() {
        internals.initController(internals.getRoute() || internals.defaultRoute);

        window.onhashchange = function() {
            internals.initController(internals.getRoute() || internals.defaultRoute);
        }
    }

    return externals;
})