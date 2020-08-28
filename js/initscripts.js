window.addEventListener('scroll', function(e) {
    var x = document.getElementById('desktopContainer').scrollTop;
    if (x % window.innerHeight < 100 && x % window.innerHeight > -100) {
        document.getElementById('header').style.backgroundColor = 'transparent';
    } else if ((x >= window.innerHeight - 500) && (x < 2 * window.innerHeight)) {
        document.getElementById('header').style.backgroundColor = 'rgba(0, 93,167 ,0.6)';
    } else if ((x >= 2 * window.innerHeight - 500) && x < (3 * window.innerHeight)) {
        document.getElementById('header').style.backgroundColor = 'rgba(0, 93,167 ,0.6)';
    } else {
        document.getElementById('header').style.backgroundColor = 'transparent';
    }

    if (isInViewport(document.getElementById('block2'))) {
        console.log('true');
        var lst = document.getElementById('headerPages').getElementsByTagName('a');
        console.log(lst);
        for (var i = 0; i < lst.length; i++) {
            lst[i].style.color = 'rgb(3, 32, 73)';
        }
    } else {
        var lst = document.getElementById('headerPages').getElementsByTagName('a');
        for (var i = 0; i < lst.length; i++) {
            lst[i].style.color = 'rgb(255, 255, 255)';
        }
    }
}, true);

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */ &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) /* or $(window).height() */ ;
}