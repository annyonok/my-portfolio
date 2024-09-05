// Menu
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // предотвращаем действие по умолчанию

        // Убираем класс 'current' у всех ссылок
        document.querySelectorAll('.link').forEach(link => {
            link.classList.remove('current');
        });

        // Добавляем класс 'current' к нажатой ссылке
        this.classList.add('current');
    });
});

const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');
const burgerList = document.querySelector('.burger__list');

function menuShow() {
    burgerOpen.addEventListener('click', () => {
        burgerList.classList.add('show');
        burgerOpen.style.display = 'none';
        burgerClose.style.display = 'block';
    });

    burgerClose.addEventListener('click', () => {
        burgerList.classList.remove('show');
        burgerOpen.style.display = 'block';
        burgerClose.style.display = 'none';
    });
}

menuShow();

