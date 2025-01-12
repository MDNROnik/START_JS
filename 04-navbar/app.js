
const button = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
links
button.addEventListener('click', function(){
    let classlists = links.classList;
    if( classlists.contains('show-links') ){
        //console.log(1111);

        classlists.remove('show-links');
    }
    else{
        //console.log(2222);
        
        classlists.add('show-links');
    }
    links.classList=classlists;
    
});