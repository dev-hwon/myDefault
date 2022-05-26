window.addEventListener('load', onLoadEvent);

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player = {};
function makeYoutube(id, link) {
    player[id] = new YT.Player(id, {
        height: '100%',
        width: '100%',
        playerVars: { autoplay: 0, controls: 0 },
        videoId: link,
        events: {
            onReady: onPlayerReady
        }
    });
    function onPlayerReady(event) {
        event.target.playVideo();
    }
}
function yotubeLoad() {
    [].forEach.call(document.querySelectorAll('.ad_video'), function(el, index) {
        var thisYoutubeLink = el.getAttribute('data-youtubeLink');
        el.style.backgroundImage = "url('//img.enuri.info/images/mobile_v2/icon_play_video@720x404.png'), url("+makeThumbsnail(thisYoutubeLink) +")";
    });
}
function yotubeOnClick() {
    [].forEach.call(document.querySelectorAll('.ad_video'), function(el, index) {
        el.addEventListener('click', function() {
            var thisYoutubeLink = this.getAttribute('data-youtubeLink');
            this.id = makeRandomId();
            makeYoutube(this.id, thisYoutubeLink);
        });
    });
}
function onLoadEvent() {
    yotubeLoad();
    yotubeOnClick();
    navSwiper.on('onTransitionEnd', youtubeAllStop);
    crazyDealSwiper.on('onTransitionEnd', youtubeAllStop);
}
function yotubePlay(el) {
    var thisYoutubeId = el.attr('id');
    player[thisYoutubeId].playVideo();
}
function youtubeAllStop() {
    for (var youtube in player) {
        player[youtube].pauseVideo();
    }
}
var makeRandomId = function() {
    var randomId = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var totalCnt = document.getElementsByClassName('ad_video').length;
    for (var i = 0; i < totalCnt; i++) randomId += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return randomId;
};
var makeThumbsnail = function(id) {
    var imageUrl;
    return imageUrl = '//img.youtube.com/vi/'+ id +'/sddefault.jpg';
}
