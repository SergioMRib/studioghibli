define(['service/moviesService', 'view/moviesView'], function(service, view) {

    var internals = {};
    var externals = {};


    externals.init = function() {
        service.getList('films')
            .then(result => result.json())
            .then(data => view.show(data, internals.loadMore))
    }

    internals.loadMore = function() {
        console.log("load more was clicked")
        service.getList()
            .then(result => result.json())
            .then(data => view.more(data))       
    }

    

    return externals;
})