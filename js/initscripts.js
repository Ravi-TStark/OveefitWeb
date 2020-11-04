window.addEventListener('scroll', function(e) {
    var x = document.getElementById('desktopContainer').scrollTop;
    if (x % window.innerHeight < 100 && x % window.innerHeight > -100) {
        document.getElementById('header').style.backgroundColor = 'transparent';
    } else if ((x >= window.innerHeight - 500) && (x < 2 * window.innerHeight)) {
        document.getElementById('header').style.backgroundColor = 'rgba(50, 50, 50, 0.6)';
    } else if ((x >= 2 * window.innerHeight - 500) && x < (3 * window.innerHeight)) {
        document.getElementById('header').style.backgroundColor = 'rgba(50, 50, 50, 0.6)';
    } else {
        document.getElementById('header').style.backgroundColor = 'transparent';
    }
}, true);

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ ;
}