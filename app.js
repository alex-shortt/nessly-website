/* global $*/
$(document).ready(function() {
    var canvas = $("canvas");
    canvas.appendTo(".interact");
    var shopvid = document.getElementsByClassName("shop")[0].getElementsByTagName("video")[0];
    var creditsvid = document.getElementsByClassName("credits")[0].getElementsByTagName("video")[0];

    shopvid.pause();
    creditsvid.pause();
    $('.splash').click(function() {
        $(this).addClass('fadeOut');
        $('.dash').removeClass('hidden');
        $('.dash').addClass('fadeIn');
    });
    $('#creditslink').click(function() {
        $('.credits').removeClass('hidden');
        $('.dash').addClass('hidden');
        creditsvid.currentTime = 0;
        creditsvid.play();
        $('.credits').addClass('fadeIn');
    });
    $('.back').click(function() {
        $('.credits').addClass('fadeOut');
        $('.credits').addClass('hidden');
        creditsvid.pause();
        $('.dash').removeClass('hidden');
    });
    $('#shoplink').click(function() {
        $('.shop').removeClass('hidden');
        $('.dash').addClass('hidden');
        shopvid.currentTime = 0;
        shopvid.play();
        $('.shop').addClass('fadeIn');
    });
    $('.back').click(function() {
        $('.shop').addClass('fadeOut');
        $('.shop').addClass('hidden');
        $('.dash').removeClass('hidden');
        shopvid.pause();
    });
    $('#interactlink').click(function() {
        $('.interact').removeClass('hidden');
        $('.dash').addClass('hidden');
        $('.interact').addClass('fadeIn');
    });
    $('.back').click(function() {
        $('.interact').addClass('fadeOut');
        $('.interact').addClass('hidden');
        $('.dash').removeClass('hidden');
    });
    $('#soundlink').click(function() {
        $('.soundspace').removeClass('hidden');
        $('.dash').addClass('hidden');
        $('.soundspace').addClass('fadeIn');
    });
    $('.back').click(function() {
        $('.soundspace').addClass('fadeOut');
        $('.soundspace').addClass('hidden');
        $('.dash').removeClass('hidden');
    });
    $('.republic-logo').click(function() {
        window.open('http://www.republicrecords.com/');
    });
    $('#tourlink').click(function() {
        //window.open('https://www.songkick.com/artists/9035059-nessly');
    });
    $('#storelink').click(function() {
        window.open('http://nesslyworld.bigcartel.com/');
    });
    if (window.matchMedia("screen and (max-width: 600px)").matches) {
        $('.splash').addClass('fadeOut');
        $('.dash').removeClass('hidden');
        $('.dash').addClass('fadeIn');
    }
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
