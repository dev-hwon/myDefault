var scrollCheckTest = {
    info : {},
    scrollUpDown : function(){
        var _this = this;
        var loadPosition = $(window).scrollTop();
        var beforePosition = _this.info.beforePosition
        var scrollCondition;
        $(window).on('scroll', function(){
            var currentPosition = $(window).scrollTop();
            _this.info.currentPosition = currentPosition;
            if(currentPosition == 0 || loadPosition == 0) {
                scrollCondition = 'top';
            } else {
                if(_this.info.beforePosition > currentPosition) {
                    scrollCondition = 'up';
                } else {
                    scrollCondition = 'down';
                }
            }
            _this.info.scrollCondition = scrollCondition;
            _this.info.beforePosition = currentPosition;
        });
        
    }
};
scrollCheckTest.scrollUpDown();

$(window).on('scroll', function(){
    console.log(scrollCheckTest.info.scrollCondition);
})