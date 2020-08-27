document.addEventListener('scroll', function(){
    if(window.scrollY >= window.innerHeight - 100){
        document.getElementById('header').style.backgroundColor = 'rgba(65,117,229,0.9)';
    }
    else{
        document.getElementById('header').style.backgroundColor = 'transparent';
    }
});