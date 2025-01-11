const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "blue"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
let index = 0;
btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});


getRandomNumber = ()=>{
    return Math.floor( Math.random()*colors.length );
};
