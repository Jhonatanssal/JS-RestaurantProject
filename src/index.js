const container = document.querySelector('#content');

const nav = document.createElement('nav');
nav.classList.add('navbar', 'navbar-expand', 'navbar-light');

const navItem1 = document.createElement('button');
navItem1.classList.add('btn', 'nav-btn');
navItem1.textContent = 'Home';
const navItem2 = document.createElement('button');
navItem2.textContent = 'Menu';
navItem2.classList.add('btn', 'nav-btn');
const navItem3 = document.createElement('button');
navItem3.textContent = 'Contact';
navItem3.classList.add('btn', 'nav-btn');

const navBtns = [navItem1, navItem2, navItem3];

console.log(navBtns);

container.appendChild(nav);

navBtns.forEach( (item) => {
  nav.appendChild(item);
});
