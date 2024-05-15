
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

const dayNight = document.querySelector('.day-night');
const solSvg = document.getElementById('sol-svg');
const body = document.querySelector('body');

dayNight.addEventListener('click', () => {
    body.classList.toggle('dark');
    hamburger.classList.toggle('night');
    // hamburger.style.color = '#f9f4da';
    // hamburger.style.backgroundColor = '#0f0d0e';
    // solSvg.setAttribute('fill', '#ccc');
    console.log(solSvg.style.fill);
    if (solSvg.style.fill === '') {
        solSvg.style.fill = '#f9f4da';
    } else {
        solSvg.style.fill = '';
    }
    
});