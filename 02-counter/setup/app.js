let counter = 0;


const btns = document.getElementsByClassName("btn");
const count = document.getElementById("value");
//console.log(btns)
;
for(let i=0;i<btns.length;i++){
    //console.log(btns[i]);
    btns[i].addEventListener('click', function(e){
        
        if(btns[i].classList[1]=="decrease"){
            count.textContent = --counter;
        }

        else if(btns[i].classList[1]=="reset"){
            count.textContent = counter = 0;
        }

        else if(btns[i].classList[1]=="increase"){
            count.textContent = ++counter;
        }

        if(counter>0){
            count.style.color = "green";
        }
        else if(counter<0){
            count.style.color = "red";
        }

    });
}







//decrease
// document.querySelector(".decrease").addEventListener('click',function(){
//     document.getElementById("value").textContent = counter = counter-1;
// });

// //reset
// document.querySelector(".reset").addEventListener('click',function(){
//     document.getElementById("value").textContent = counter = 0;
// });

// //increase
// document.querySelector(".increase").addEventListener('click',function(){
//     document.getElementById("value").textContent = counter = counter+1;
// });