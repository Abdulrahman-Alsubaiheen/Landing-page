/**
 * Define Global Variables
 *
 */

const sections = document.querySelectorAll("section");
const navbar_list = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function remove_active_class() {
  for (let i = 0; i < sections.length; i++) {
    let item = sections[i];

    item.classList.remove("your-active-class");
  }
}

// need to call
function rect_class() {
  for (let i = 0; i < sections.length; i++) {
    let item = sections[i];

    let rect = item.getBoundingClientRect();
    console.log(rect);
  }
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function build_nav_bar() {
  for (let i = 0; i < sections.length; i++) {
    let item = sections[i];

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.textContent = item.dataset.nav; // HTML data-* Attribute
    a.setAttribute("href", "#" + item.getAttribute("id"));

    li.classList.add("menu__link");
    li.appendChild(a);

    navbar_list.appendChild(li);

    // console.log(item);
  }
}

// Add class 'active' to section when near top of viewport
function active_class() {
  for (let i = 0; i < sections.length; i++) {
    let item = sections[i];
    let rect = item.getBoundingClientRect();

    if (rect.top < 250 && rect.bottom > 250) {
      if (!item.classList.contains("your-active-class")) {
        remove_active_class();
        item.classList.add("your-active-class");
        // console.log(item);
      }
    }
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

 
// Build menu
build_nav_bar();

// Set sections as active
window.addEventListener("scroll", active_class);
