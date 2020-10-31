const menu = () => {
  const container = document.getElementById('main');

  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  div1.setAttribute('id', 'main-element');

  div1.appendChild(h1);
  container.appendChild(div1);
};

export default menu;
