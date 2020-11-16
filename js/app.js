/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const navbar_list = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

for (let i = 0; i < sections.length; i++) {
    let item = sections[i];

    const li = document.createElement('li');
    const a = document.createElement('a');

    a.textContent = item.dataset.nav;   // HTML data-* Attribute

    a.setAttribute("href", '#' + item.getAttribute('id'));

    li.classList.add("menu__link");

    li.appendChild(a);
    navbar_list.appendChild(li);

    console.log(item);
  }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


