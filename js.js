/*var position = window.scrollY;
var count = 0;

function posY(){
  alert(window.scrollY);
  alert(window.scrollTop);
}

function throttle(callback, delay) {
    var last;
    var timer;
    return function () {
        var context = this;
        var now = +new Date();
        var args = arguments;
        if (last && now < last + delay) {
            // le délai n'est pas écoulé on reset le timer
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(context, args);
            }, delay);
        } else {
            last = now;
            callback.apply(context, args);
        }
    };
}

window.addEventListener('scroll', throttle((posY),1000));*/
