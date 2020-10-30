import contact from './contact';
import home from './home';
import menu from './menu';

const btnFunctionality = (classes) => {
  if (classes.contains('home')) {
    home();
  } else if (classes.contains('menu')) {
    menu();
  } else {
    contact();
  }
};

const nav = () => {

  const container = document.getElementById('content');

  const nav = document.createElement('nav');
  nav.classList.add('navbar', 'navbar-expand', 'navbar-light', 'bg-light');

  const navItem1 = document.createElement('button');
  navItem1.classList.add('btn', 'nav-btn', 'home');
  navItem1.textContent = 'Home';
  const navItem2 = document.createElement('button');
  navItem2.classList.add('btn', 'nav-btn', 'menu');
  navItem2.textContent = 'Menu';
  const navItem3 = document.createElement('button');
  navItem3.classList.add('btn', 'nav-btn', 'contact', 'contact1');
  navItem3.textContent = 'Contact';

  const navBtns = [navItem1, navItem2, navItem3];

  navBtns.forEach( (item) => {
    nav.appendChild(item);
    item.addEventListener('click', (e) => {
      const classes = e.currentTarget.classList;

      btnFunctionality(classes);

    })
  });
  container.appendChild(nav);
  console.log(container);
};

export default nav;
