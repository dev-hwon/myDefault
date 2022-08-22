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


// // 퍼블용_양방향 레인지(메인, 바텀시트)
// // 개발시 검색값 적용되면 한쪽처리되면 다른쪽에 값이 입력되게 처리.
// // 현재는 두군데 동시작동되어 이중으로 검색처리 될듯?
// function rangeBothSide(elem, min, max, step) {
//     var _target = $(elem);
// 	var outputMaxBalloon = _target.find(".thumb .balloon em");
// 	var outputMin = _target.find(".thumb_value .min em");
//     var outputMax = _target.find(".thumb_value .max em");
// 	var inputTextMin = _target.find(".input--text-min");
//     var inputTextMax = _target.find(".input--text-max");
//     var inputMin = _target.find(".input--range-min");
//     var inputMax = _target.find(".input--range-max");
//     var thumbMin = _target.find(".thumb.min");
//     var thumbMax = _target.find(".thumb.max");
//     var range = _target.find(".range");
// 	var dataResultCnt = '45' // 검색결과 총갯수 하단검색결과 갯수랑 맞춰야되는건지.. 다른옵션선택시 결과값변경되면 이것도변경되야하는건지... 들은내용없음... 답답

// 	// 움직임
// 	function moveMinThumb(val) {
// 		var percent = ((+val - min) / (max - min)) * 100;
// 		thumbMin.css('left', percent+'%');
//         range.css('left', percent+'%');
// 	}
// 	function moveMaxThumb(val) {
// 		var percent = ((+val - min) / (max - min)) * 100;
// 		thumbMax.css('right', (100 - percent)+'%');
//         range.css('right', (100 - percent)+'%');
// 	}

// 	// 공통입력
// 	function inputMinCommon(val) {
// 		inputMin.val(val);
// 		inputTextMin.val(val);
// 		outputMin.text(addComma(val))
// 	}
// 	function inputMaxCommon(val) {
// 		inputMax.val(val);
// 		inputTextMax.val(val);
// 		outputMax.text(addComma(val));
// 		outputMaxBalloon.text(dataResultCnt);
// 	}

// 	// 직접입력값체크
// 	function setTextMinCheck(val) {
// 		if(val < min) return min;
// 		if(val >= +inputTextMax.val()) return +inputTextMax.val() - step;
// 	}
// 	function setTextMaxCheck(val) {
// 		if(val > max) return max;
// 		if(val <= +inputMin.val()) return +inputMin.val() + step;
// 	}

// 	// 직접입력
// 	function setTextMinValue(event) {
// 		var _value = Math.round(event.target.value / 5000) * 5000;
// 		_value = setTextMinCheck(_value);
// 		inputMinCommon(_value);
// 		moveMinThumb(_value);
// 	}
// 	function setTextMaxValue() {
// 		var _value = Math.round(event.target.value / 5000) * 5000;
// 		_value = setTextMaxCheck(_value);
// 		inputMaxCommon(_value);
// 		moveMaxThumb(_value);
// 	}

// 	// 범위설정
// 	function setMinValue(event) {
//         if (inputMax.val() - +event.target.value <= step) {
//             event.target.value = inputMax.val() - step;
//         }
// 		inputMinCommon(event.target.value);
// 		moveMinThumb(event.target.value);
//     }
// 	function setMaxValue(event) {
// 		if (+event.target.value - +inputMin.val() <= step) {
//             event.target.value = +inputMin.val() + +step;
//         }
// 		inputMaxCommon(event.target.value);
// 		moveMaxThumb(event.target.value);
//     }

// 	// 실행
//     if (inputMin && inputMax) {
// 		inputMin.on("input", function(){ setMinValue(event); });
// 		inputMax.on("input", function(){ setMaxValue(event); });
//     }
	
// 	inputTextMin.on('change', function(){ setTextMinValue(event);});
// 	inputTextMax.on('change', function(){ setTextMaxValue(event);});
// }
// rangeBothSide('.rangeBothSide', 20000, 110000, 5000);