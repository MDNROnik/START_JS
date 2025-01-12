const side = document.querySelector('.sidebar');
const btn = document.querySelector('.sidebar-toggle');
const close = document.querySelector('.close-btn');
const test = document.getElementById("test");

let step = 0;
btn.addEventListener('click', function(){
    // side.classList.toggle('show-sidebar');
    if ((step%2)==0){
        test.style.transform = "translate(-100%)" ;
    }
    else{
        test.style.transform = "translate(0%)" ;
    }
    step++;
});
close.addEventListener('click', function(){
    if ((step%2)==0){
        test.style.transform = "translate(-100%)" ;
    }
    else{
        test.style.transform = "translate(0%)" ;
    }
    step++;
});
