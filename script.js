'use strict';
const track = document.querySelector('.clientLogoTrack');
const logo1 = document.querySelector('.clientLogo');
const testCard1 = document.getElementById('test-card1');
const testCard2 = document.getElementById('test-card2');
const testCard3 = document.getElementById('test-card3');
const testCard4 = document.getElementById('test-card4');
const testCard5 = document.getElementById('test-card5');
const testArray = [testCard1,testCard2,testCard3,testCard4,testCard5];
const testItems = document.querySelector('.testimonial-cards');
const testActive = testArray[2];
var logoText = document.querySelector('.logoText').textContent;

const totalTestItem = testArray.length;
const moreInfo = document.querySelector('.more-info');
const showMore = document.querySelector('.show-more');
const showLess = document.querySelector('.show-less');



// const screenSizeMax = document.contentType('width=device-width').style.maxWidth = '50rem';

 let burgerItems = document.querySelector('.burgerItems');;

const hamrburger = document.getElementById('harmburger')
const hamburgerList = document.querySelector('.hamburger');

  hamrburger.addEventListener('click', function toggleHambugger (){
    hamburgerList.classList.toggle("change");
    burgerItems.classList.toggle('hide')
  });

  document.addEventListener('keydown', function(m){
    console.log(m); 
    if(m.key === 'Escape' && !burgerItems.classList.contains('hide')){
        hamburgerList.classList.remove('change')
        burgerItems.classList.add('hide');
    }
  });


showMore.addEventListener('click', function(){
    moreInfo.style.display = 'block';
    showLess.style.display = 'flex';
    showLess.classList.remove('hide');
    showMore.classList.add('hide');
    showMore.style.display = 'none';
});

showLess.addEventListener('click', function(){
    moreInfo.style.display = 'none';
    showMore.style.display = 'flex';
    showMore.classList.remove('hide');
    showLess.classList.add('hide');
    showLess.style.display = 'none';
});


// if(screenSizeMax){
//     logoText = 'main'
// }

const totalSlides = track.length;
let currentSlide = 0;

function slideLogos(){
    currentSlide++;

    if(currentSlide === totalSlides){
        track.style.animation = 'none';
        track.style.transform = 'translate(0)';
        currentSlide = 1;


        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
            track.style.transform = `translateX(-${12 * currentSlide}rem)`
        }, 50)
    } else {
        track.style.transition = 'transform 0.5s ease-in-out';
        track.style.transform = `translateX(-${12 * currentSlide}rem)`
    }

    setTimeout(slideLogos, 2000);

}

setTimeout(slideLogos, 2000); 
let currentItem = 1;

function cardTestSlides(){
    
};

const names = ['demola', 'adetutu', 'shola', 'julius', 'lanre'];

const numbers = [10, 1, 15, 8, 6, 7, 9, 5, 3, 2, 4];

const sortedNumbers = numbers.sort((a, c) => a - c);

const sortedNames = names.sort();

console.log(sortedNumbers);