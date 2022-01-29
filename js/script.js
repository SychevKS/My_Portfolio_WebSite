const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


//автосчет процентов
const percent = document.querySelectorAll('.skills__item-percent'),
lines = document.querySelectorAll('.skills__item-strip .skills__item-strip_filled');

percent.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})
