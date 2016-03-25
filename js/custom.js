(function($){
    var addContrib = function(data) {
        // var data = JSON.parse(data);
        $.each(data.contributors, function(index, item) {
            var _tmp = '<div class="col-md-2"><div class="card people"><img class="img-rounded" width="150" height="150" src="'+item.avatar+'" alt=""/><div class="title"><a href="#">'+item.name+'</a></div></div></div>';
            $('#contrib').append(_tmp);
        });
    }
    var alertContrib = function(data) {
        $('#contrib').append('Sorry couldn\'t load contributors.');
    }
    var req = {
        url:'data/contributors.json',
        dataType: 'json',
        async: true,
        success: addContrib,
        error: alertContrib
    }
    $.ajax(req);
    var addGames = function(data) {
        // var data = JSON.parse(data);
        $.each(data.games, function(index, item) {
            var _tmp = '<div class="col-md-3"><div class="card games"><img class="img-circle" width="200" height="200" src="'+item.image+'" alt=""/><div class="title"><h4><a href="'+item.link+'">'+item.name+'</a></h4></div></div></div>';
            $('#games').append(_tmp);
        });
    }
    var alertGames = function(data) {
        $('#games').append('<div class="alert alert-warning"> Sorry couldn\'t load <strong>Games.</strong></div>');
    }
    $.ajax({
        url:'data/games.json',
        dataType: 'json',
        async: true,
        success: addGames,
        error: alertGames
    });
})(jQuery);
