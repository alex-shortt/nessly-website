/* global $ */
$(document).ready(function() {
    var video = $("#landing-video").get(0);

    $(window).hashchange(function() {
        console.log('asdf');
        var hash = location.hash;
        var cleanHash = (hash.replace(/^#/, '') || 'blank').split("?")[0];

        $('.splash').addClass('hidden');
        $('.dash').addClass('hidden');
        $('.soundspace').addClass('hidden');
        $('.interact').addClass('hidden');
        $('.tour').addClass('hidden');

        switch (cleanHash) {
            case 'blank':
                if (window.matchMedia("screen and (max-width: 600px)").matches) {
                    window.location.hash = "tour";
                } else {
                    $('.splash').removeClass('hidden');
                }
                break;
            case 'home':
                $('.dash').removeClass('hidden');
                $('.dash').addClass('fadeIn');
                break;
            case 'listen':
                $('.soundspace').removeClass('hidden');
                $('.soundspace').addClass('fadeIn');
                break;
            case 'interact':
                $('.interact').removeClass('hidden');
                $('.interact').addClass('fadeIn');
                break;
            case 'tour':
                $('.tour').removeClass('hidden');
                $('.tour').addClass('fadeIn');
                break;
            default:
                window.location.hash = "home";
                break;
        }
    });

    $(window).hashchange();

    var canvas = $("canvas");
    canvas.appendTo(".interact");

    $('.splash').click(function() {
        window.location.hash = "tour";
    });

    $('#soundlink').click(function() {
        window.location.hash = "listen";
    });

    $('#storelink').click(function() {
        window.open('http://nesslyworld.bigcartel.com/');
    });

    $('#interactlink').click(function() {
        window.location.hash = 'interact';

    });
    $('#tourlink').click(function() {
        window.location.hash = 'tour';
    });

    $('.back').click(function() {
        window.location.hash = "home";
    });

    $('.republic-logo').click(function() {
        window.open('http://www.republicrecords.com/');
    });

    $('#wildflower-text').click(function() {
        video.currentTime = 0;
        window.location.hash = "";
    });

    printCredits();
});

function printCredits() {
    console.log("                                                        \
            \n       _   _               _                               \
            \n      | \\ | |             | |                              \
            \n      |  \\| | ___  ___ ___| |_   _                         \
            \n      | . ` |/ _ \\/ __/ __| | | | |                        \
            \n      | |\\  |  __/\\__ \\__ \\ | |_| |                        \
            \n      |_| \\_|\\___||___/___/_|\\__, |                        \
            \n                              __/ |                        \
            \n                             |___/                         \
            \n____________________________________________               \
            \n____________________________________________               \
            \n                                                           \
            \nCreated by Robert Gotham and Alex Shortt                   \
            \n Alex Shortt :: Developer, 3D Interaction                  \
            \n  >Twitter: @_alexshortt                                   \
            \n  >Instagram: @alexander.shortt                            \
            \nRobert Gotham :: Design, Video Graphics                    \
            \n  >Twitter: @robertgotham                                  \
            \n  >Instagram: @robertgotham                                \
            ");
}
