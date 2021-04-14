define( function() {

    var externals = {};

    externals.show = function() {
        $('#container')
            .empty()
            .append($('<p>')
                .append('the p paragraph inside the container'))
    }

    return externals;
})