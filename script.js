
const hamburgerButton = document.querySelector('.nav-hamburger-button-root');
const hamburger = document.querySelector('.nav-hamburger-button-inner');

// const primaryNav = document.querySelector('.primary-navigation');
const nav = document.querySelector('nav');

// console.log(hamburger);
hamburgerButton.addEventListener('click', () => {

    hamburger.classList.toggle('isExpanded');
    
    console.log('isExpanded');

    // console.log(hamburger.classList.toggle('isExpanded'));

    // const visibility = hamburger.getAttribute('aria-expanded');
    // console.log(visibility, typeof visibility);
    // if (visibility === 'false') {

    // }
});

// Precious -- Hover over pseudo elements like ::after and ::before

hamburgerButton.addEventListener('mouseover', () => {
    // hamburger.classList.toggle('isHovered');
    hamburger.classList.add('isHovered');
    console.log('mouse over');
});

hamburgerButton.addEventListener('mouseout', () => {
    // hamburger.classList.toggle('isHovered');
    hamburger.classList.remove('isHovered');
    console.log('mouse out');
});

hamburgerButton.addEventListener('click', () => {

    // primaryNav.classList.toggle('active');
    nav.classList.toggle('active');

});

// Original

// const responsiveNavbar = () => {
//     const primaryNav = document.querySelector('.primary-navigation');
//     const navToggle = document.querySelector('.mobile-nav-toggle');

//     navToggle.addEventListener('click', () => {
//         const visibility = primaryNav.getAttribute('data-visible');
//         // console.log(visibility);
//         if (visibility === 'false') {
//             primaryNav.setAttribute('data-visible', 'true');
//             navToggle.setAttribute('aria-expanded', 'true');
//         } else {
//             primaryNav.setAttribute('data-visible', 'false');
//             navToggle.setAttribute('aria-expanded', 'false');
//         }
//     });

//     // Toggle after developedByEd
//     // navToggle.addEventListener('click', () => {
//     //     primaryNav.classList.toggle('nav-active');
//     // });
// }

// responsiveNavbar();