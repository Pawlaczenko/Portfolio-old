export const stickyBar = posY => {
    const header = document.querySelector('.header');
    if (posY > 0 && !header.classList.contains('header--scrolled')) {
        header.classList.add('header--scrolled');
    } else if (posY === 0) {
        header.classList.remove('header--scrolled');
    }
}

export const handleBurger = () => {
    let menuButton = document.getElementById('menuButton');
    let navigation = document.querySelector('.nav');
    menuButton.addEventListener('click', e => {
        menuButton.classList.toggle('is-active');
        navigation.classList.toggle('nav--opened');
        e.preventDefault();
    });
}