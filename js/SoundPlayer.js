(function ($) {
    SC.initialize({
        client_id: 'L6pWQKWWm6oT4Nv0mTWEkxKypNpleA5m'
    });

    var track_url = 'https://soundcloud.com/yiayias-studio/sets/yiayias-recordings';

    var getPlaylist = function(playlist) {
        console.log(playlist);
        var source = $("#soundplayer-template").html();
        var template = Handlebars.compile(source);
        var html = template(playlist.tracks);
        console.log(playlist.tracks);
        $('#SoundcloudTracks').html(html);
        $('#SoundcloudTracks a').click(playTrack);
    };

    var playTrack = function (event) {
        var trackId = $(event.target).closest("a").data("trackid");
        SC.stream('/tracks/' + trackId).then(function (player) {
            player.play().then(function () {
                console.log('Playback started!');
            }).catch(function (e) {
                console.error('Playback rejected. Try calling play() from a user interaction.', e);
            });
        });
    };

    SC.resolve(track_url).then(getPlaylist);

})(jQuery);


