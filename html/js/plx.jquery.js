(function($) {
    $(function() {
        function customPlx(){
            $('.plx').each(function(index, item){
                $(this).css({
                    'background-repeat':'no-repeat',
                    'background-attachment': 'fixed',
                    'background-position':' 0 0'
                });
                var elemTop = $(item).offset().top;
                // var elemBottom = elemTop + $(item).height();
                var type = $(item).data('plxtype');
                $(window).scroll(function(){
                    var docViewTop = $(window).scrollTop();
                    var docViewBottom = docViewTop + $(window).height();
                    if(type === 'bg') {
                        var unit = 0.5*-1;
                        var pos_bg = ((docViewTop - elemTop) * unit);
                        if(docViewBottom >= elemTop) {
                            $(item).css('background-position-y', pos_bg);
                        }
                    } else if(type ==='item') {
                        var unit = $(item).data('plxspeed')*-1;
                        var pos_item = ((docViewTop * unit) + elemTop);
                        $(item).css('top', pos_item);
                    }
                });

            });
        }
        customPlx();
    });
})(jQuery);