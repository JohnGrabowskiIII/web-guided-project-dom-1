// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
// FINISHED
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.querySelector('.card')
// B- finding within one particular element
const imageFirstCard = document.querySelector('div.card img');
const titleFirstCard = document.querySelector('.card-title');
const subtitleFirstCard = document.querySelector('.card-subtitle');
const textFirstCard = document.querySelector('.card-text');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// FINISHED
// A- Find all the anchor tags inside the nav element
const navItems = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
function printContent(element) {
    console.log(element.textContent);
}
navItems.forEach(printContent);

// C- Turn the collection of links into a real array
// FINISHED
const navItemsArr = Array.from(navItems);

// D- Use .filter to find the anchor tag with the textContent of "Home"
// FINISHED
const home = navItemsArr.filter(element => element.textContent === "Home")[0];


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
// FINISHED
titleFirstCard.textContent = 'Dog';

//  B- Have the students research online the difference between textContent and innerText
// FINISHED
// innerText allows you to add HTML tags but is unsecure



// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
// FINISHED
logoTitle.className = 'logo heading banana';
logoTitle.setAttribute('class', 'new class names');

//  B- Using .setAttribute to change a few attributes
// FINISHED
imageFirstCard.setAttribute('src', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F09%2F22%2F50-cute-dog-names.jpg')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
// FINISHED
logoTitle.classList.add('white-text')

//  B- By manipulating inline styles on the element
// FINISHED
header.style.background = 'pink';


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const nav = document.querySelector('nav');
const blogMenuItem = document.createElement('a');
blogMenuItem.classList.add('menu-item');
blogMenuItem.setAttribute('href', '#');
blogMenuItem.textContent = 'Blog';


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
