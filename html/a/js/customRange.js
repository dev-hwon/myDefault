// 단방향
function oneWayRange(target) {
    const oneWayRange = document.querySelector(target);
    const input = oneWayRange.querySelector(".input_range");
    const thumb = oneWayRange.querySelector(".thumb");
    const range = oneWayRange.querySelector(".range");
    const setValue = e => {
        const _this = e.target;
        const { min, max } = _this;  
        const percent = ((+_this.value - +min) / (+max - +min)) * 100;
        thumb.querySelector('span').innerHTML = addComma(_this.value);
        thumb.style.right = `${100 - percent}%`;
        range.style.right = `${100 - percent}%`; 
        if((100 - percent) < 5) {
            thumb.querySelector('span').classList.add('edge');
        } else {
            thumb.querySelector('span').classList.remove('edge');
        }
    };
    input.addEventListener("input", setValue);
}

// 양방향 레인지
function rangeBothSide(target) {
    const rangeBothSide = document.querySelector(target);
    const inputLeft = rangeBothSide.querySelector(".input_left");
    const inputRight = rangeBothSide.querySelector(".input_right");
    const thumbLeft = rangeBothSide.querySelector(".thumb.left");
    const thumbRight = rangeBothSide.querySelector(".thumb.right");
    const range = rangeBothSide.querySelector(".range");
    const setLeftValue = e => {
        const _this = e.target;
        const {step, value, min, max } = _this;  
        if (+inputRight.value - +value <= step) {
            _this.value = +inputRight.value - step;
        }
        const percent = ((+_this.value - +min) / (+max - +min)) * 100;
		thumbLeft.querySelector('span').innerHTML = addComma(_this.value);
        thumbLeft.style.left = `${percent}%`;
        range.style.left = `${percent}%`;
		if((percent) < 5) {
			thumbLeft.querySelector('span').classList.add('edge');
		} else {
			thumbLeft.querySelector('span').classList.remove('edge');
		}
    };
    const setRightValue = e => {
        const _this = e.target;
        const {step, value, min, max } = _this;
        if (+value - +inputLeft.value <= step) {
            _this.value = +inputLeft.value + +step;
        }
        const percent = ((+_this.value - +min) / (+max - +min)) * 100;
        thumbRight.querySelector('span').innerHTML = addComma(_this.value);
        thumbRight.style.right = `${100 - percent}%`;
        range.style.right = `${100 - percent}%`;
		if((100 - percent) < 5) {
			thumbRight.querySelector('span').classList.add('edge');
			// thumbRight.querySelector('span').animate({transform: ['translateX(-100%)'], left : "100%"}, { duration: 500, fill: 'forwards'});
		} else {
			thumbRight.querySelector('span').classList.remove('edge');
		}
    };
    if (inputLeft && inputRight) {
        inputLeft.addEventListener("input", setLeftValue);
        inputRight.addEventListener("input", setRightValue);
    }
}

// jquery 로 작업
// function rangeBothSide(elem) {
//     var _target = $(elem);
// 	var outputLeft = _target.find(".thumb_value .left em");
//     var outputRight = _target.find(".thumb_value .right em");
//     var inputLeft = _target.find(".input_min");
//     var inputRight = _target.find(".input_max");
//     var thumbLeft = _target.find(".thumb.min");
//     var thumbRight = _target.find(".thumb.max");
//     var range = _target.find(".range");
// 	function setLeftValue(event) {
//         var _this = event.target;
//         var {step, value, min, max } = _this;  
//         if (+inputRight.value - +value <= step) {
//             _this.value = +inputRight.value - step;
//         }
//         var percent = ((+_this.value - +min) / (+max - +min)) * 100;
// 		inputLeft.val(_this.value);
// 		outputLeft.html(addComma(_this.value));
//         thumbLeft.css('left', percent+'%');
//         range.css('left', percent+'%');
//     };
// 	function setRightValue(event) {
//         var _this = event.target;
//         var {step, value, min, max } = _this;
//         if (+value - +inputLeft.value <= step) {
//             _this.value = +inputLeft.value + +step;
//         }
//         var percent = ((+_this.value - +min) / (+max - +min)) * 100;
// 		inputRight.val(_this.value);
// 		outputRight.html(addComma(_this.value));
//         thumbRight.css('right', (100 - percent)+'%');
//         range.css('right', (100 - percent)+'%');
//     };

//     if (inputLeft && inputRight) {
//         inputLeft.on("input", function(){ setLeftValue(event); });
// 		inputRight.on("input", function(){ setRightValue(event); });
//     }
	
// }
// rangeBothSide('.rangeBothSide');