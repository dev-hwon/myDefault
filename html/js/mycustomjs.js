/********************************************************
 @ promotion function 2021.06.29 by.hyunwon version.1.00
 ********************************************************/

var areaWin = $(window),
    areaBody = $('body');

// 클래스추가
function addClass(elem, name) {
    $(elem).addClass(name);
}

// 클래스제거
function removeClass(elem, name) {
    $(elem).removeClass(name);
}

// 팝업레이어
function popupLayer(id) {
    var target = $(id);
    if (target.css('display') === 'none') {
        target.show();
    } else {
        target.hide();
    }
}

function customTab(id) {
    var target = $(id),
        target_menu = target.find('> li'); // li 안에 앵커태그있을경우 a까지 추가하는게 좋을듯..
    target_menu.on('click',function(e){
        // e.preventDefault(); 선택자가 a태그일경우
        var tabname = $(this).data("tabname");
        $(this).addClass("active").siblings().removeClass("active");
        $(tabname).addClass("active").siblings().removeClass("active");
    });
}

/****************** <tab> default markup ****************
 customTab('#flow-tab-list');

 <ul id="flow-tab-list">
     <li data-tabname="flow_buy" class="active">구매절차안내</li>
     <li data-tabname="flow_delivery">배송절차안내</li>
 </ul>
 <div class="tab_content">
     <div id="flow_buy" class="active">
     </div>
 </div>
 ********************************************************/

// 텍스트복사
function copyText(elem) {
    var copytext = $(elem).text();

    areaBody.append('<input class="copy-area"  value="' + copytext +'">');
    areaBody.find('.virtual-area').select();
    document.execCommand('copy');
    $(".virtual-area").remove();
    alert(copytext +'복사되었습니다.')
}

// 셀렉트 옵션클릭시 링크이동
function selectLink(id) {
    $(id).change(function() {
        var address = $(this).val();
        window.open(address);
    });
}

// 스크롤 이동, 탭에서 사용.
function scrollMove(elem) {
    var location = $(elem).attr('href');
    $(elem).on('click', function(e){
        e.preventDefault();
        var location_position_value = Math.ceil(location.offset().top);

        $('html, body').stop().animate({ scrollTop: location_position_value }, 500);
        return false;
    });
}

// 엘리먼트 고정
function fixedNav(id) {
    var elemTop = id.offset().top;
    $(document).on("scroll", function () {
        var docViewTop = areaWin.scrollTop();
        if(docViewTop > elemTop) {
            id.addClass('fixed');
        } else {
            id.removeClass('fixed');
        }
    });
}


/* 애니메이트 스크롤 쓸때 반드시 같이 사용 작동위치 감지 */
function isScrolledIntoView(target, check) {
    var docViewTop = areaWin.scrollTop();
    var docViewBottom = docViewTop + areaWin.height();
    var elemTop = target.offset().top;
    // return (docViewBottom >= elemTop);
    var animate_nm = target.data('animate');

    if(animate_nm == 'slideup') {
        if(check == 'down') {
            elemTop = elemTop-target.height();
        }
        return (docViewBottom >= elemTop);
    } else {
        return (docViewBottom >= elemTop);
    }
}

// 애니메이트 스크롤
function animateScroll(target){
    target.each(function(index, item) {
        var animate_nm = $(item).data('animate');
        var animate_duration = "duration__" + $(item).data('duration'); // 작동시간
        // var animate_duration = "delay__" + $(item).data('duration'); // 딜레이
        var animate_class = "";
        switch(animate_nm) {
            case "slideleft":
                animate_class = 'slideInLeft'
                break;
            case "slideright":
                animate_class = 'slideInRight'
                break;
            case "slideup":
                animate_class = 'slideInUp'
                break;
            case "slidedown":
                animate_class = 'slideInDown'
                break;
            case "rotateIn":
                animate_class = 'rotateIn'
                break;
        }

        var position = areaWin.scrollTop();
        $(document).on("scroll", function () {
            var scroll = areaWin.scrollTop();
            if(scroll > position) {
                var wheelcontrol = 'down'
            } else {
                var wheelcontrol = 'up'
            }
            position = scroll;

            if (isScrolledIntoView($(item),wheelcontrol)) {
                $(item).addClass(animate_class+" "+ (animate_duration ? animate_duration : ''));
            }
            if (!isScrolledIntoView($(item),wheelcontrol)) {
                $(item).removeClass(animate_class+" "+ (animate_duration ? animate_duration : ''));
            }
        });
    });
}

// 패럴렉스_스크롤
function scrollResponsivePlx(){
    $('.plx').each(function(index, item){
        var elemTop = $(item).offset().top;
        var docViewTop = areaWin.scrollTop();
        var docViewBottom = docViewTop + areaWin.height();

        var unit = 0.5*-1;
        var pos_bg = ((docViewTop - elemTop) * unit);
        if(docViewBottom >= elemTop) {
            $(item).animate({
                'background-position-y': pos_bg
            },400);
        }
        areaWin.scroll(function(){
            var docViewTop = areaWin.scrollTop();
            var pos_bg = ((docViewTop - elemTop) * unit);
            if(docViewBottom >= elemTop) {
                $(item).css('background-position-y', pos_bg);
            }
        });
    });
}

// 패럴렉스_마우스 (target .plx 로 사용하는게좋을듯..)
function mouseResponsivePlx(target) {
    var mousePos = { x: 0, y: 0 };
    target.each(function(index, item){
        var target = $(this);
        var valueX = target.data('vx');
        var valueY = target.data('vy');
        areaWin.mousemove(function(e){
            // 특정구간 설정 (설정한 값 부모)
            var moveArea = target.parent();
            // 특정구간 안에서 작동
            if(moveArea.has(e.target).length){
                mousePos.x = -1 + (e.clientX / areaWin.innerWidth() * 2);
                mousePos.y = 1 + (e.clientY / areaWin.innerHeight() * 2);
                $(item).css({
                    'transform':'translateX('+ (mousePos.x * valueX) +'px) translateY('+ (mousePos.y * valueY) +'px)'
                })
                // console.log('x: '+mousePos.x +', y : '+ mousePos.y);
            }
        });
    });
}

function openModalPopup(elem) {
    var target = $(elem);
    var target_pos_width = target.width();
    var target_pos_height = target.height();
    target.before('<div class="modal_overlay"></div>')
    target.css({
            'margin-top': -(target_pos_height/2),
            'margin-left': -(target_pos_width/2),
    })
    target.fadeIn();

    target.prev().on('click', function(){
        closeModalPopup(elem);
    });
    $('.btn-close', target).on('click', function(){
        closeModalPopup(elem);
    });
}
function closeModalPopup(elem) {
    var target = $(elem),
        target_overlay = $('.modal_overlay');
    target_overlay.fadeOut(function(){$(this).remove()});
    target.fadeOut();
}
function scrollMove(elem) {
    $('html, body').animate({scrollTop : $(elem).offset().top }, 600);
}