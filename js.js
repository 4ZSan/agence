var initial_position = 0;

function posY(){
  var current_position = window.scrollY;
  alert("position initial : "+initial_position);
  alert("position actuel : "+current_position);
  if (current_position > initial_position) {
    initial_position = initial_position + 888;
    window.scroll(0,initial_position);
  }
  if (current_position < initial_position) {
    initial_position = initial_position - 888;
    window.scroll(0,initial_position);
  }
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

function debounce(func, wait, immediate, context) {
    var result;
    var timeout = null;
    return function() {
        var ctx = context || this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) result = func.apply(ctx, args);
        };
        var callNow = immediate && !timeout;
        // Tant que la fonction est appelée, on reset le timeout.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(ctx, args);
        return result;
    };
}

window.addEventListener('scroll', debounce((posY),1000));
