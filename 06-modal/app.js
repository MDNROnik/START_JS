const btn = document.querySelector('.btn');
const modle = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');
btn.addEventListener('click', function(){
    modle.classList.toggle('open-modal');
});
close.addEventListener('click', function(){
    modle.classList.toggle('open-modal');
});