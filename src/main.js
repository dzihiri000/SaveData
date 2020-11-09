//Header menu
const navItems = document.querySelectorAll('.header__nav-item');

navItems.forEach((item, index) => {
    item.onclick = () => {
        changeItem(index);
    };
});

function changeItem(index) {
    for (let item of navItems) {
        item.classList.remove("active");
    }

    navItems[index].classList.add("active");
}

//Mobile burger menu
const navSlide = () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav-items');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    })
}

navSlide();

//Slider

const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.testimonials__controls-dot');
const btn = document.querySelectorAll('.testimonials__controls-arrow');
const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const arrows = document.querySelectorAll('.testimonials__controls-arrow');

let index = 0;

arrows.forEach((arrow, index) => {
    arrow.onclick = () => {
        changeArrow(index);
    }
});

function changeArrow(index) {
    for(let arrow of arrows){
        arrow.classList.remove("active-arrow")
    }
    arrows[index].classList.add("active-arrow");
}

dots.forEach((dot, index) => {
    dot.onclick = () => {
        changeDot(index);
        changeSlide(index);
    };
});

function changeDot(index) {
    for (let dot of dots) {
        dot.classList.remove("active-dot");
    }

    dots[index].classList.add("active-dot");
}

function changeSlide(index) {
    for (let slide of slides) {
        slide.classList.remove("active-slide");
    }

    slides[index].classList.add("active-slide");
}
function nextSlide () {
    index++;
    if (index > slides.length - 1){
        index = 0;
    }
        changeDot(index);
        changeSlide(index);
}
function prevSlide () {
    index--;
    if (index < 0) {
        index = slides.length -1;
    }
        changeDot(index);
        changeSlide(index);
}

arrLeft.addEventListener('click', prevSlide);
arrRight.addEventListener('click', nextSlide);

