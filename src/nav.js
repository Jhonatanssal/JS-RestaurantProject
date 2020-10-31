import home from './home';
import clear from './clearPage';
import btnFunctionality from './logic';

const nav = () => {
  const container = document.getElementById('content');
  const nav = document.createElement('nav');
  const main = document.createElement('main');
  const content = document.createElement('div');
  const navItem1 = document.createElement('button');
  const navItem2 = document.createElement('button');
  const navItem3 = document.createElement('button');

  container.appendChild(nav);
  container.appendChild(main);
  container.appendChild(content);
  main.appendChild(content);

  nav.classList.add('navbar', 'navbar-expand', 'navbar-light', 'bg-light');

  navItem1.classList.add('btn', 'nav-btn', 'home');
  navItem1.textContent = 'Home';
  navItem2.classList.add('btn', 'nav-btn', 'menu');
  navItem2.textContent = 'Menu';
  navItem3.classList.add('btn', 'nav-btn', 'contact', 'contact1');
  navItem3.textContent = 'Contact';

  content.setAttribute('id', 'main');
  content.classList.add('bg-warning', 'container');

  const navBtns = [navItem1, navItem2, navItem3];

  navBtns.forEach((item) => {
    item.addEventListener('click', () => {
      const classes = item.classList;

      btnFunctionality(classes);
    });
  });

  navBtns.forEach((item) => {
    nav.appendChild(item);
  });

  home();
};

export default nav;
