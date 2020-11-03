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