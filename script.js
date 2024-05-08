
const hamburgerButton = document.querySelector('.nav-hamburger-button-root');
const hamburger = document.querySelector('.nav-hamburger-button-inner');

// const primaryNav = document.querySelector('.primary-navigation');
const nav = document.querySelector('nav');

// console.log(hamburger);
hamburgerButton.addEventListener('click', () => {

    hamburger.classList.toggle('isExpanded');
    
    // console.log('isExpanded');
});

// Precious -- Hover over pseudo elements like ::after and ::before

hamburgerButton.addEventListener('mouseover', () => {
    // hamburger.classList.toggle('isHovered');
    hamburger.classList.add('isHovered');
    // console.log('mouse over');
});

hamburgerButton.addEventListener('mouseout', () => {
    // hamburger.classList.toggle('isHovered');
    hamburger.classList.remove('isHovered');
    // console.log('mouse out');
});

hamburgerButton.addEventListener('click', () => {

    // primaryNav.classList.toggle('active');
    nav.classList.toggle('active');

});

// const dayNight = document.querySelector('.day-night');
// const main = document.querySelector('main');

// dayNight.addEventListener('click', () => {
//     main.classList.toggle('dark');
//     // dayNight.classList.toggle('dark');
// });