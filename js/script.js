

const bx = document.querySelector('.bx');
const menuMobile = document.querySelector('.menu-mobile');
const linkMobile = document.querySelectorAll('.link-menu-mobile');

bx.addEventListener('click', () => {
    bx.classList.toggle('active');
    menuMobile.classList.toggle('show-menu');
});

linkMobile.forEach(link => {
    link.addEventListener('click', () => {
        bx.classList.toggle('active');
        menuMobile.classList.remove('show-menu');
    });
});

