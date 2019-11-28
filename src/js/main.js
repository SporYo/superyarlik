'use strict'

// Слайдер slick 
$('.slick').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false
});

//Табы для блока описания товара
var button1 = document.querySelector('.button1')
var button2 = document.querySelector('.button2')
var button3 = document.querySelector('.button3')

// Блоки
var block1 = document.querySelector('.context__description')
var block2 = document.querySelector('.context__characteristics')
var block3 = document.querySelector('.context__delivery')

button1.addEventListener('click', function() {
    block1.classList.remove('hidden')
    block2.classList.add('hidden')
    block3.classList.add('hidden')

    button1.classList.add('bottom_btn--active')
    button2.classList.remove('bottom_btn--active')
    button3.classList.remove('bottom_btn--active')
})

button2.addEventListener('click', function() {
        block1.classList.add('hidden')
        block2.classList.remove('hidden')
        block3.classList.add('hidden')

        button1.classList.remove('bottom_btn--active')
        button2.classList.add('bottom_btn--active')
        button3.classList.remove('bottom_btn--active')
    }
)
button3.addEventListener('click', function() {
    block1.classList.add('hidden')
    block2.classList.add('hidden')
    block3.classList.remove('hidden')

    button1.classList.remove('bottom_btn--active')
    button2.classList.remove('bottom_btn--active')
    button3.classList.add('bottom_btn--active')
})


