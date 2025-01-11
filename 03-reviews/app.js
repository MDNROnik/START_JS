// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("authoer");
const job = document.getElementById("job");
const info = document.getElementById("info");

const btn = document.getElementsByClassName("btn");
// const right = document.querySelector('.btn');
// const random = document.querySelector('.btn');

let index = 0;
let siz = reviews.length;




setperson = (index)=>{
  const now = reviews[index];
  img.src = now.img;
  author.textContent = now.name;
  job.textContent = now.job;
  info.textContent = now.text;

};


window.addEventListener('DOMContentLoaded', function(){
  setperson(index);
});

for(let i=0;i<btn.length;i++){
  btn[i].addEventListener('click', function(){
    if(btn[i].classList[1]=="prev"){
      index--;
      if(index<0){
        index = siz-1;
      }
    }
    else if(btn[i].classList[1]=="next"){
      index++;
      if(index>=siz){
        index = 0;
      }
    }
    else if(btn[i].classList[1]=="random"){
      index = Math.floor(Math.random()*siz);
    }
    setperson(index);
  });
}


// left.addEventListener('click',function(){
//   index--;
//   if(index<0){
//     index = siz-1;
//   }
//   setperson(index);
// });

// right.addEventListener('click',function(){
//   index++;
//   if(index>=siz){
//     index = 0;
//   }
//   setperson(index);
// });

// random.addEventListener('click',function(){
//   index = Math.floor(Math.random()*siz);
//   setperson(index);
// });