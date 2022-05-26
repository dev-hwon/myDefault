var trendSwiper = {};
var trendSwiperSet = {
    initialSlide : 0,
    loop : true,
    speed : 0,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 10,
    variableWidth: true
}
function makeSwiper(id, view, between) {
    trendSwiper[id] = new Swiper('#'+ id ,trendSwiperSet);
    trendSwiperSet.prevButton = '#'+ id + ' .arr-prev';
    trendSwiperSet.nextButton = '#'+ id + ' .arr-next';
    if(view) {
        trendSwiperSet.slidesPerView = 'view';
    }
    if(between) {
        trendSwiperSet.spaceBetween = 'between';
    }
}
function loadSwiper(id) {
    [].forEach.call(document.querySelectorAll('.swiper-container'), function(el, index) {
        el.id = makeRandomId();
        //var targetType = el.parentnode('trendtab-cont')
        makeSwiper(el.id);
    });
}
var makeRandomId = function() {
    var randomId = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    // var totalCnt = document.getElementsByClassName('swiper-container').length;
    for (var i = 0; i < 10; i++) randomId += possible.charAt(Math.floor(Math.random() * possible.length));
    
    return randomId;
};

$(function(){
    $('.swiper-container').each(function(index, item){
        var id = $(item).attr('id');
        loadSwiper(id);
    });
})