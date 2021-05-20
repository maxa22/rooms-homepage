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


changeImageSizeOnWindowResize();

window.onresize = changeImageSizeOnWindowResize;

function changeImageSizeOnWindowResize() {
    let images = window.innerWidth <= 786 ? document.querySelectorAll('.images img.mobile') : document.querySelectorAll('.images img.desktop');
    for (let i = 0; i < images.length; i++) {
        images[i].style.width = document.querySelector('.images').clientWidth + 'px';
        paragraph[i].style.width = document.querySelector('.text').clientWidth - 70 + 'px';
    }

}

rightButton.addEventListener('click', () => {
    count++;
    addTransitionToImageAndTextSlider();
    slideImageAndText(count);
    disableAndEnablePointerEvents(rightButton);
})

leftButton.addEventListener('click', () => {
    count--;
    addTransitionToImageAndTextSlider();
    slideImageAndText(count);
    disableAndEnablePointerEvents(leftButton);
})

slider.addEventListener('transitionend', () => {
    if(count === 0) {
        removeTransitionFromImageAndTextSlider();
        count = size - 1;
        slideImageAndText(count);
    } 
    else if(count === size) {
        removeTransitionFromImageAndTextSlider();
        count = 1;
        slideImageAndText(count);
    }
})

function slideImageAndText(value) {
    slider.style.transform = 'translateX(-' + value * 100 + '%)';
    textSlider.style.transform = 'translateX(-' + value * 100 + '%)';
}

function addTransitionToImageAndTextSlider() {
    slider.style.transition = 'all 0.2s';
    textSlider.style.transition = 'all 0.2s';
}

function removeTransitionFromImageAndTextSlider() {
    slider.style.transition = 'none';
    textSlider.style.transition = 'none';
}

function disableAndEnablePointerEvents(button) {
    button.style.pointerEvents = 'none';
    setTimeout(() => {
        button.style.pointerEvents = 'all';
    }, 300)
}