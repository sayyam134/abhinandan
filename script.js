const slides = document.querySelectorAll(".slide");      
var counter = 0;
slides.forEach(
    (slide,index) =>{
     slide.style.left = `${index * 100}%`;
    }
)

function goNext(){
    if(counter >= slides.length-1){
        return;
    }
    counter++;
    slideImage();
}
function goPrev(){
    if(counter < 0){
        return;
    }
    counter--;
    slideImage();
}
function slideImage(){
        slides.forEach(
            (slide) =>{
                slide.style.transform = `translateX(-${counter * 100}%  )`
            }
        ) 
}

function Menu(e){
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = 'close', list.classList.add('top-[80px]'), list.classList.add('opacity-100'))
    : (e.name = 'menu', list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

