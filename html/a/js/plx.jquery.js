function customPlx(){
    $('.plx').each(function(index, item){
        var elemTop = $(item).offset().top;
        var type = $(item).data('plxtype'); 

        //적용타입이 배경일경우에만 적용
        if(type === 'bg') {
            $(this).css({
                'background-repeat':'no-repeat',
                'background-attachment': 'fixed',
                'background-position':' 0 0'
            });
        }
        
        // var elemBottom = elemTop + $(item).height();
        $(window).scroll(function(){
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            // 배경에 적용시
            if(type === 'bg') { 
                var unit = 0.5*-1; // 무조건 - 값되게
                var pos_bg = ((docViewTop - elemTop) * unit); 
                if(docViewBottom >= elemTop) {
                    $(item).css('background-position-y', pos_bg);
                }
            } else if(type ==='item') {  // 돔객체에 적용시
                var unit = $(item).data('plxspeed')*-1;
                var pos_item = ((docViewTop * unit) + elemTop);
                $(item).css('top', pos_item);
            }
        });

    });
}
customPlx();