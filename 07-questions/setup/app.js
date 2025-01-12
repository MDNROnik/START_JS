const btn = document.getElementsByClassName('question-btn');
const que = document.getElementsByClassName('question');
let step = 0;
for(let i=0;i<btn.length;i++){
   
    btn[i].addEventListener('click', function(){
        console.log(i);
        // console.log(que[i]);
        let child = que[i].children;
        //console.log(child[1]);
        child[1].classList.toggle('question-text');

        let btnc = btn[i].children;
        btnc[0].classList.toggle('plus-icon');
        btnc[1].classList.toggle('minus-icon');
        console.log(btnc[0], btnc[1]);

    });
}


