import home from './home';
import btnFunctionality from './logic';
import mainLogo from './img/logo.png';

const nav = () => {
  const container = document.getElementById('content');
  const nav = document.createElement('nav');
  const navSpan = document.createElement('span');
  const main = document.createElement('main');
  const content = document.createElement('div');
  const navItem1 = document.createElement('a');
  const navItem2 = document.createElement('a');
  const navItem3 = document.createElement('a');
  const logo = document.createElement('img');

  container.appendChild(nav);
  container.appendChild(main);
  container.appendChild(content);
  main.appendChild(content);

  nav.classList.add('navbar', 'navbar-expand', 'navbar-light', 'bg-danger', 'd-flex', 'justify-content-between', 'shadow-sm', 'fixed-top');

  navItem1.classList.add('btn', 'nav-btn', 'home', 'text-white', 'font-weight-bold');
  navItem1.textContent = 'Home';
  navItem2.classList.add('btn', 'nav-btn', 'menu', 'text-white', 'font-weight-bold');
  navItem2.textContent = 'Menu';
  navItem3.classList.add('btn', 'nav-btn', 'contact', 'text-white', 'font-weight-bold');
  navItem3.textContent = 'Contact';
  logo.setAttribute('src', mainLogo);
  logo.classList.add('nav-logo');

  content.setAttribute('id', 'main');

  const navBtns = [navItem1, navItem2, navItem3];

  navBtns.forEach((item) => {
    item.addEventListener('click', () => {
      const classes = item.classList;

      btnFunctionality(classes);
    });
  });

  navBtns.forEach((item) => {
    navSpan.appendChild(item);
  });

  nav.appendChild(logo);
  nav.appendChild(navSpan);

  home();
};

export default nav;
