let counter = 0;

//decrease
document.querySelector(".decrease").addEventListener('click',function(){
    document.getElementById("value").textContent = counter = counter-1;
});

//reset
document.querySelector(".reset").addEventListener('click',function(){
    document.getElementById("value").textContent = counter = 0;
});

//increase
document.querySelector(".increase").addEventListener('click',function(){
    document.getElementById("value").textContent = counter = counter+1;
});