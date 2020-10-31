const home = () => {
  const cont = document.getElementById('main');
  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');

  div1.setAttribute('id', 'main-element');

  h1.textContent = 'Home';

  cont.appendChild(div1);
  div1.appendChild(h1);
};

export default home;
