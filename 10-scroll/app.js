const btn = document.querySelector('.nav-toggle');
const link = document.querySelector('.links-container');
const d = document.getElementById('date');

let year = new Date();
console.log(year.getFullYear());
d.innerHTML = year.getFullYear();

btn.addEventListener('click', function(){
  link.classList.toggle('links-container');
});