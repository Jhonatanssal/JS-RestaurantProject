import menu1 from './img/asian-crunch.jpg';
import menu2 from './img/baos-de-camaron.jpg';
import menu3 from './img/baos-de-cerdo.jpg';
import menu4 from './img/calamar-crunchy.jpg';
import menu5 from './img/croquetas-de-cangrejo.jpg';
import menu6 from './img/gyosas-de-cerdo-2.jpg';
import menu7 from './img/kani-especial.jpg';
import menu8 from './img/sensacion.jpg';
import menu9 from './img/sushi-market-coco-roll.jpg';

const menu = () => {
  const container = document.getElementById('main');

  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  const menuItems = document.createElement('div');
  const menuItem1 = document.createElement('div');
  const menuItem2 = document.createElement('div');
  const menuItem3 = document.createElement('div');
  const menuItem4 = document.createElement('div');
  const menuItem5 = document.createElement('div');
  const menuItem6 = document.createElement('div');
  const menuItem7 = document.createElement('div');
  const menuItem8 = document.createElement('div');
  const menuItem9 = document.createElement('div');

  const menuImg1 = document.createElement('img');
  const menuImg2 = document.createElement('img');
  const menuImg3 = document.createElement('img');
  const menuImg4 = document.createElement('img');
  const menuImg5 = document.createElement('img');
  const menuImg6 = document.createElement('img');
  const menuImg7 = document.createElement('img');
  const menuImg8 = document.createElement('img');
  const menuImg9 = document.createElement('img');

  menuImg1.classList.add('menu-img');
  menuImg2.classList.add('menu-img');
  menuImg3.classList.add('menu-img');
  menuImg4.classList.add('menu-img');
  menuImg5.classList.add('menu-img');
  menuImg6.classList.add('menu-img');
  menuImg7.classList.add('menu-img');
  menuImg8.classList.add('menu-img');
  menuImg9.classList.add('menu-img');

  const menuTitle1 = document.createElement('h3');
  const menuTitle2 = document.createElement('h3');
  const menuTitle3 = document.createElement('h3');
  const menuTitle4 = document.createElement('h3');
  const menuTitle5 = document.createElement('h3');
  const menuTitle6 = document.createElement('h3');
  const menuTitle7 = document.createElement('h3');
  const menuTitle8 = document.createElement('h3');
  const menuTitle9 = document.createElement('h3');

  menuImg1.setAttribute('src', menu1);
  menuImg2.setAttribute('src', menu2);
  menuImg3.setAttribute('src', menu3);
  menuImg4.setAttribute('src', menu4);
  menuImg5.setAttribute('src', menu5);
  menuImg6.setAttribute('src', menu6);
  menuImg7.setAttribute('src', menu7);
  menuImg8.setAttribute('src', menu8);
  menuImg9.setAttribute('src', menu9);

  menuItem1.classList.add('menu-item');
  menuItem2.classList.add('menu-item');
  menuItem3.classList.add('menu-item');
  menuItem4.classList.add('menu-item');
  menuItem5.classList.add('menu-item');
  menuItem6.classList.add('menu-item');
  menuItem7.classList.add('menu-item');
  menuItem8.classList.add('menu-item');
  menuItem9.classList.add('menu-item');

  menuTitle1.textContent = 'Asian Crunch';
  menuTitle2.textContent = 'Baos de Camaron';
  menuTitle3.textContent = 'Baos de Cerdo';
  menuTitle4.textContent = 'Calamar Crunchy';
  menuTitle5.textContent = 'Croquetas de Cangrejo';
  menuTitle6.textContent = 'Gyosas de Cerdo';
  menuTitle7.textContent = 'Kani Especial';
  menuTitle8.textContent = 'Sensación';
  menuTitle9.textContent = 'Coco Roll';

  menuTitle1.classList.add('card-title');
  menuTitle2.classList.add('card-title');
  menuTitle3.classList.add('card-title');
  menuTitle4.classList.add('card-title');
  menuTitle5.classList.add('card-title');
  menuTitle6.classList.add('card-title');
  menuTitle7.classList.add('card-title');
  menuTitle8.classList.add('card-title');
  menuTitle9.classList.add('card-title');

  menuItem1.prepend(menuImg1, menuTitle1);
  menuItem2.prepend(menuImg2, menuTitle2);
  menuItem3.prepend(menuImg3, menuTitle3);
  menuItem4.prepend(menuImg4, menuTitle4);
  menuItem5.prepend(menuImg5, menuTitle5);
  menuItem6.prepend(menuImg6, menuTitle6);
  menuItem7.prepend(menuImg7, menuTitle7);
  menuItem8.prepend(menuImg8, menuTitle8);
  menuItem9.prepend(menuImg9, menuTitle9);

  h1.textContent = 'Menu';

  div1.setAttribute('id', 'main-element');
  div1.classList.add('text-center', 'd-flex', 'flex-column', 'w-100', 'mx-auto', 'flex-wrap', 'my-5', 'pt-3');
  menuItems.classList.add('d-flex', 'flex-wrap', 'mx-auto', 'w-100', 'justify-content-center');

  div1.appendChild(h1);
  container.appendChild(div1);
  div1.appendChild(menuItems);
  menuItems.appendChild(menuItem1);
  menuItems.appendChild(menuItem2);
  menuItems.appendChild(menuItem3);
  menuItems.appendChild(menuItem4);
  menuItems.appendChild(menuItem5);
  menuItems.appendChild(menuItem6);
  menuItems.appendChild(menuItem7);
  menuItems.appendChild(menuItem8);
  menuItems.appendChild(menuItem9);

  const menuImgs = document.querySelectorAll('.menu-item');

  menuImgs.forEach( (item) => {
    item.classList.add('card', 'col-3', 'm-3', 'p-2');
  })

  const menuTitles = document.querySelectorAll()
};

export default menu;
