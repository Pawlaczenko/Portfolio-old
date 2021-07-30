export const stickyBar = posY => {
    const header = document.querySelector('.header');
    if (posY > 0 && !header.classList.contains('header--scrolled')) {
        header.classList.add('header--scrolled');
    } else if (posY === 0) {
        header.classList.remove('header--scrolled');
    }
}