const aboutPhoto = document.querySelector('.about__photo')

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

// Двигаем фотку
aboutPhoto.addEventListener('click', (event) => {
    const rect = aboutPhoto.getBoundingClientRect()

    const offfsetX = event.clientX - rect.left - rect.width / 2
    const offfsetY = event.clientY - rect.top - rect.height / 2

    const DEG = 50

    const tiltX = (offfsetY / rect.height) * DEG
    const tiltY = (offfsetX / rect.width) * -DEG

    aboutPhoto.style.setProperty('--tiltX', `${tiltX}deg`)
    aboutPhoto.style.setProperty('--tiltY', `${tiltY}deg`)

    setTimeout(() => {
        aboutPhoto.style.setProperty('--tiltX', `0deg`)
        aboutPhoto.style.setProperty('--tiltY', `0deg`)
    }, 300)
})






