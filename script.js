const slider = document.querySelector('.images');
let images = window.innerWidth <= 786 ? document.querySelectorAll('.images img.mobile') : document.querySelectorAll('.images img.desktop');
const rightButton = document.querySelector('.rightArrow');
const leftButton = document.querySelector('.leftArrow');
const paragraph = document.querySelectorAll('.text p');
const textSlider = document.querySelector('.text');
const text = document.querySelectorAll('.text > div');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');



hamburger.addEventListener('click', () => {
    nav.classList.add('active');
})
close.addEventListener('click', () => {
    nav.classList.remove('active');
})

// ###############################################################
// SLIDER

let count = 1;
let size = images.length - 1;
function changeWindowSize() {
    let images = window.innerWidth <= 786 ? document.querySelectorAll('.images img.mobile') : document.querySelectorAll('.images img.desktop');
    for(let i=0; i < images.length; i++) {
        images[i].style.width = document.querySelector('.images').clientWidth + 'px';
        paragraph[i].style.width = document.querySelector('.text').clientWidth - 70 + 'px';
    }

}

changeWindowSize();

window.onresize = changeWindowSize;

rightButton.addEventListener('click', () => {
    count++;
    slider.style.transition= 'all 0.2s';
    slider.style.transform = 'translateX(-' + count * 100 + '%)';
    textSlider.style.transition= 'all 0.2s';
    textSlider.style.transform = 'translateX(-' + count * 100 + '%)';
    disableAndEnablePointerEvents(rightButton);
})

leftButton.addEventListener('click', () => {
    count--;
    slider.style.transition= 'all 0.2s';
    slider.style.transform = 'translateX(-' + count * 100 + '%)';
    textSlider.style.transition= 'all 0.2s';
    textSlider.style.transform = 'translateX(-' + count * 100 + '%)';
    disableAndEnablePointerEvents(leftButton);
})

slider.addEventListener('transitionend', () => {
    if(count === 0) {
        slider.style.transition = 'none';
        textSlider.style.transition = 'none';
        count = size - 1;
        slider.style.transform = 'translateX(-' + count * 100 +'%)';
        textSlider.style.transform = 'translateX(-' + count * 100 +'%)';
    } 
    else if(count === size) {
        slider.style.transition = 'none';
        textSlider.style.transition = 'none';
        count = 1;
        slider.style.transform = 'translateX(-100%)';
        textSlider.style.transform = 'translateX(-100%)';
    }
})

function disableAndEnablePointerEvents(button) {
    button.style.pointerEvents = 'none';
    setTimeout(() => {
        button.style.pointerEvents = 'all';
    }, 300)
}