define(['view/moviesView'], function(view) {

    var internals = {};
    var externals = {};

    externals.init = function() {
        view.show();
    }

    return externals;
})