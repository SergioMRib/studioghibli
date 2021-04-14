define(['service/moviesService', 'view/moviesView'], function(service, view) {

    var internals = {};
    var externals = {};

    externals.init = function() {
        service.getList()
            .then(result => result.json())
            .then(data => view.show(data))
    }

    externals.loadMore = function() {
        service.getList()
            .then(result => result.json())
            .then(data => view.show(data))       
    }

    return externals;
})