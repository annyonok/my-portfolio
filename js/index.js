// Menu
const burgerOpen = document.querySelector('.header__contacts-burger');
const burgerClose = document.querySelector('.header__contacts-burger-close');
const burgerList = document.querySelector('.header__contacts');

function menuShow() {
    burgerOpen.addEventListener('click', () => {
        burgerList.classList.remove('hide');
        burgerList.classList.add('show');
        burgerOpen.style.display = 'none';
        burgerClose.style.display = 'block';
    });

    burgerClose.addEventListener('click', () => {
        burgerList.classList.remove('show');
        burgerList.classList.add('hide');
        setTimeout(() => {
            burgerOpen.style.display = 'block';
            burgerClose.style.display = 'none';
        }, 300); // Задержка должна совпадать с длительностью перехода
    });
}

menuShow();

// // Menu
// $('.header__contacts-burger').click(() => {
//     $('.header__contacts').slideToggle().css('display', 'flex');
// })

