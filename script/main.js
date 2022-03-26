let burgerMenu = document.querySelector('.header__contacts-burger-menu');
let headerMobile = document.querySelector('.header-mobile');
let slides = document.querySelectorAll('.slider__main-track .slider__main-track-item');
let currentNumber = 0;
let leaveApplication = document.querySelector('.slider__main-track-inner-first-upper-left-submit');
let allCourses = document.querySelector('.slider__main-track-inner-first-upper-btn');
let prev = document.querySelector('.slider__btn-prev');
let next = document.querySelector('.slider__btn-next');
let more = document.querySelector('.slider__main-track-inner-first-down-more');
let dotsFirst = document.querySelector('.slider__main-track-inner-first-down-dots-item-first');
let dotsSecond = document.querySelector('.slider__main-track-inner-first-down-dots-item-second');
let dotsThird = document.querySelector('.slider__main-track-inner-first-down-dots-item-third');
let slidesTwo = document.querySelectorAll('.slider__main-track-inner-third-track .slider__main-track-inner-third-track-column');
let currentNumberTwo = 0;
let particularsFirst = document.querySelector('.slider__main-track-inner-third-track-column-btn');
let particularsSecond = document.querySelector('#particularsSecond');
let particularsThird = document.querySelector('#particularsThird');
let moreThird = document.querySelector('.slider__main-track-inner-third-more');
let nextTwo = document.querySelector('.slider__main-track-inner-third-next-btn');
let prevTwo = document.querySelector('.slider__main-track-inner-third-prev-btn'); 
let moreFourth = document.querySelector('.slider__main-track-inner-fourth-more');
let tabsSwitches = document.querySelectorAll('.slider__main-track-fourth-tabs-btn .slider__main-track-fourth-tabs-btn-item');
let tabsContents = document.querySelectorAll('.slider__main-track-inner-fourth-gallery');
let moreFifth = document.querySelector('.slider__main-track-inner-fifth-more');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('header__contacts-burger-menu-active');
    headerMobile.classList.toggle('header-mobile-active');
});

function thePreviousSlide() {
    slidesSwitсh(currentNumber - 1);
}

function theNextSlide() {
    slidesSwitсh(currentNumber + 1);
}

function slidesSwitсh(n) {
    slides[currentNumber].className = 'slider__main-track-item';
    currentNumber = (n + slides.length) % slides.length;
    slides[currentNumber].className = 'slider__main-track-item active';
}

prev.addEventListener('click', function() {
    thePreviousSlide();
});

next.addEventListener('click', function() {
    theNextSlide();
});

more.addEventListener('click', function() {
    slidesSwitсh(currentNumber + 1);
});

dotsFirst.addEventListener('click', function() {
    slidesSwitсh(currentNumber + 2);
});

dotsSecond.addEventListener('click', function() {
    slidesSwitсh(currentNumber + 3);
});

dotsThird.addEventListener('click', function() {
    slidesSwitсh(currentNumber + 4);
});

leaveApplication.addEventListener('click', function() {
    slidesSwitсh(currentNumber + 4);
});

allCourses.addEventListener('click', function() {
    slidesSwitсh(currentNumber + 2);

});

moreThird.addEventListener('click', function() {
    slidesSwitсh(currentNumber -1);
});

nextTwo.addEventListener('click', function() {
    slidesSwitсhTwo(currentNumberTwo + 1);
});

prevTwo.addEventListener('click', function() {
    slidesSwitсhTwo(currentNumberTwo - 1);
});

particularsFirst.addEventListener('click', function() {
    slidesSwitсh(currentNumber - 1);
});

particularsSecond.addEventListener('click', function() {
    slidesSwitсh(currentNumber - 1);
});

particularsThird.addEventListener('click', function() {
    slidesSwitсh(currentNumber - 1);
});

moreFourth.addEventListener('click', function() {
    slidesSwitсh(currentNumber - 2);
});

moreFifth.addEventListener('click', function() {
    slidesSwitсh(currentNumber - 3);
});

function slidesSwitсhTwo(n) {
    slidesTwo[currentNumberTwo].className = 'slider__main-track-inner-third-track-column';
    currentNumberTwo = (n + slidesTwo.length) % slidesTwo.length;
    slidesTwo[currentNumberTwo].className = 'slider__main-track-inner-third-track-column track-column-active';
}

tabsSwitches.forEach(tabsSwitchesOnClick);

function tabsSwitchesOnClick(tabsSwitchesNumber) {
    tabsSwitchesNumber.addEventListener('click', function() {
        let currentTabsSwitch = tabsSwitchesNumber;
        let tabsId = currentTabsSwitch.getAttribute('data-number');
        let currentTabsContent = document.querySelector(tabsId);
        
        if( ! currentTabsSwitch.classList.contains('tabs-btn-active') ) {
            tabsSwitches.forEach(function(tabsSwitchesNumber) {
                tabsSwitchesNumber.classList.remove('tabs-btn-active');
            });

            tabsContents.forEach(function(tabsSwitchesNumber) {
                tabsSwitchesNumber.classList.remove('tabs-active');
            });

            currentTabsSwitch.classList.add('tabs-btn-active');
            currentTabsContent.classList.add('tabs-active');
        }
    });
}

document.querySelector('.slider__main-track-fourth-tabs-btn-item').click();

