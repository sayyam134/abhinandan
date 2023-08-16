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

