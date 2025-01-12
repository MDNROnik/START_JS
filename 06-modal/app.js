const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal-overlay');
const close = document.querySelector('.close-btn');
btn.addEventListener('click', function(){
    modal.classList.toggle('open-modal');
});
close.addEventListener('click', function(){
    modal.classList.toggle('open-modal');
});