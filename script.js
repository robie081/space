
const hamburgerButton = document.querySelector('.nav-hamburger-button-root');
const hamburger = document.querySelector('.nav-hamburger-button-inner');

// const primaryNav = document.querySelector('.primary-navigation');
const nav = document.querySelector('nav');
// const body = document.body;
const body = document.querySelector('body');

// console.log(hamburger);
hamburgerButton.addEventListener('click', () => {

    hamburger.classList.toggle('isExpanded');
    
    // console.log('isExpanded');

    // No scroll for cross when menu is open

    if (hamburger.classList.contains('isExpanded')) {
        body.classList.add('no-scroll');
    } else {
        body.classList.remove('no-scroll');
    }
});

// body.addEventListener('click', () => {
//     hamburger.classList.remove('isExpanded');
// });

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
// const body = document.querySelector('body');

// const linkedin = document.querySelector('.linkedin');
// const github = document.querySelector('.github');

const ul = document.getElementById('social');
// console.log(ul);
const li = ul.querySelectorAll('.social');
// console.log(li);



dayNight.addEventListener('click', () => {
    body.classList.toggle('light');
    hamburger.classList.toggle('dark');

    if (solSvg.style.fill === '') {
        // solSvg.style.fill = '#f9f4da';
        solSvg.style.fill = '#111827';
    } else {
        solSvg.style.fill = '';
    }
    
    // linkedin.classList.toggle('darky');
    // github.classList.toggle('darky');

    // li.forEach(item => {
    //     let a = item.getElementsByTagName('a')[0];
    //     a.classList.toggle('darky');
    // });

    for (let item of li) {
        let a = item.getElementsByTagName('a')[0];
        a.classList.toggle('darky');
    }
});