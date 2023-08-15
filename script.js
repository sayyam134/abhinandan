const slides = document.querySelectorAll(".slide");      
var counter = 0;
slides.forEach(
    (slide,index) =>{
     slide.style.left = `${index * 100}%`;
    }
)
function goNext(){
    counter++;
    slideImage();
}
function goPrev(){
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

