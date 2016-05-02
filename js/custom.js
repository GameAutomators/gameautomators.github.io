/* Custom JS dependent on Jquery for ajax requests */
(function($){
    $.ajax({
        url:'data/games.json',
        dataType: 'json',
        async: true,
        success: function(dg){
            $.ajax({
                url: 'data/contributors_short.json',
                dataType: 'json',
                async: true,
                success: function(dc) {
                    /* Adding each games to index.html */
                    $.each(dg.games, function(index, item) {
                        var _tmp = '<div class="col-xs-6 col-sm-4 col-md-3"><div class="card games"><img class="img-circle" width="200" height="200" src="'+item.image+'" alt=""/><div class="title"><a href="'+item.link+'">'+item.name+'</a></div></div></div>';
                        $('#games').append(_tmp);
                    });
                    /* Adding each contributors to index.html */
                    $.each(dc.contributors, function(index, item) {
                        var _tmp = '<div class="col-xs-6 col-sm-3 col-md-2"><div class="card people"><img class="img-rounded" width="150" height="150" src="'+item.avatar+'" alt=""/><div class="title"><a href="#">'+item.name+'</a></div></div></div>';
                        $('#contrib').append(_tmp);
                    });
                    /* Adding all contributors to contributors.html */
                    $.ajax({
                        url: 'data/contributors.json',
                        dataType: 'json',
                        async: true,
                        success: function(d1){
                            $.each(d1.contributors, function(index, item) {
                                var _tmp = '<div class="col-xs-6 col-sm-3 col-md-2"><div class="card people"><img class="img-rounded" width="150" height="150" src="'+item.avatar+'" alt=""/><div class="title"><a href="#">'+item.name+'</a></div></div></div>';
                                $('#contrib_full').append(_tmp);
                            });
                        },
                        error: function(d2) {}
                    });
                },
                error: function(ec) {
                    /* Error message is added if ajax fails */
                    $('#games').append('<div class="alert alert-warning"> Sorry couldn\'t load <strong>games.</strong></div>');
                    $('#contrib').append('<div class="alert alert-warning"> Sorry couldn\'t load <strong>contributors.</strong></div>');
                }
            });
        },
        error: function(eg) {
            /* Error message is added if ajax fails */
            $('#games').append('<div class="alert alert-warning"> Sorry couldn\'t load <strong>games.</strong></div>');
            $('#contrib').append('<div class="alert alert-warning"> Sorry couldn\'t load <strong>contributors.</strong></div>');
        }
    });
})(jQuery);
/* End of custom.js */
