document.addEventListener('scroll', function(){
    if(window.scrollY >= window.innerHeight - 500 && window.scrollY < 2 * window.innerHeight){
        document.getElementById('header').style.backgroundColor = 'rgba(0 ,93 , 167, 0.6)';
    }
    else{
        document.getElementById('header').style.backgroundColor = 'transparent';
    }
});