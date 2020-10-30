const contact = () => {
  const container = document.getElementById('content');

  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Contact';

  div1.appendChild(h1);
  container.appendChild(div1);
}

export default contact;
