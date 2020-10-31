/* eslint-disable import/no-cycle */

import homeCover from './img/home-cover.jpg';
import btnFunctionality from './logic';

const home = () => {
  const cont = document.getElementById('main');
  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  const coverImg = document.createElement('img');
  const menuBtn = document.createElement('button');

  coverImg.setAttribute('src', homeCover);
  coverImg.classList.add('img-fluid', 'home-img');
  div1.setAttribute('id', 'main-element');
  div1.classList.add('mt-2', 'text-center', 'd-flex', 'flex-column', 'w-75', 'mx-auto');
  h1.classList.add('font-weight-bolder', 'text-danger', 'bg-light', 'p-2', 'rounded', 'col-7', 'mx-auto');
  menuBtn.classList.add('btn', 'btn-danger', 'menu', 'col-3', 'mx-auto');
  menuBtn.textContent = 'Menu';

  menuBtn.addEventListener('click', () => {
    btnFunctionality(menuBtn.classList);
  });

  h1.textContent = 'Welcome to SushiMall';

  cont.appendChild(div1);
  div1.appendChild(coverImg);
  div1.appendChild(h1);
  div1.appendChild(menuBtn);
};

export default home;
