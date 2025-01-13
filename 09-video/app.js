const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
let play = 0;
btn.addEventListener("click", function(){
  btn.classList.toggle('slide');
  if(play%2 === 0 ){
    video.pause();
  }
  else{
    video.play();
  }
  play++;
});