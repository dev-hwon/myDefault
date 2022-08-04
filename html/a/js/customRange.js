
function oneWayRange(target) {
    const oneWayRange = document.querySelector(target);
    const input = oneWayRange.querySelector(".input_range");
    const thumb = oneWayRange.querySelector(".thumb");
    const range = oneWayRange.querySelector(".range");
    // step은 한점에서 만나는경우가 없을경우 사용..
    const setValue = e => {
        const _this = e.target;
        const {value, min, max } = _this;  
        const percent = ((+_this.value - +min) / (+max - +min)) * 100;
        thumb.innerHTML = "<span>" + _this.value; + "</span>";
        thumb.style.right = `${100 - percent}%`;
        range.style.right = `${100 - percent}%`;
    };
    input.addEventListener("input", setValue);
}

function rangeBothSide(target) {
    const rangeBothSide = document.querySelector(target);
    const inputLeft = rangeBothSide.querySelector(".input_left");
    const inputRight = rangeBothSide.querySelector(".input_right");
    const thumbLeft = rangeBothSide.querySelector(".thumb.left");
    const thumbRight = rangeBothSide.querySelector(".thumb.right");
    const range = rangeBothSide.querySelector(".range");
    // step은 한점에서 만나는경우가 없을경우 사용..
    const setLeftValue = e => {
        const _this = e.target;
        const {value, min, max } = _this;  
        if (+inputRight.value - +value <= 0) {
            _this.value = +inputRight.value;
        }
        const percent = ((+_this.value - +min) / (+max - +min)) * 100;
        thumbLeft.innerHTML = "<span>" + _this.value; + "</span>";
        thumbLeft.style.left = `${percent}%`;
        range.style.left = `${percent}%`;
    };
    const setRightValue = e => {
        const _this = e.target;
        const { value, min, max } = _this;
        if (+value - +inputLeft.value < 10) {
            _this.value = +inputLeft.value + 10;
        }
        const percent = ((+_this.value - +min) / (+max - +min)) * 100;
        thumbRight.innerHTML = "<span>" + _this.value; + "</span>";
        thumbRight.style.right = `${100 - percent}%`;
        range.style.right = `${100 - percent}%`;
    };
    if (inputLeft && inputRight) {
        inputLeft.addEventListener("input", setLeftValue);
        inputRight.addEventListener("input", setRightValue);
    }
}
