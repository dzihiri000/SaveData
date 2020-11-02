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

