const contact = () => {
  const container = document.getElementById('main');

  const div1 = document.createElement('div');
  const h1 = document.createElement('h1');
  const locationTitle = document.createElement('h3');
  const locationText = document.createElement('p');
  const contactTitle = document.createElement('h3');
  const contactText = document.createElement('p');
  const finalText = document.createElement('h4');

  locationTitle.textContent = 'Location / Addres: ';
  locationText.textContent = 'Medellín, Colombia / Cra 33 # 85 Sur 159';
  contactTitle.textContent = 'Contact / Email: ';
  contactText.textContent = '+57 321 951 0000 / sushimall@sushi';
  finalText.textContent = "We'll be happy to answer you!";

  h1.textContent = 'Contact';

  div1.setAttribute('id', 'main-element');
  div1.classList.add('text-center', 'd-flex', 'flex-column', 'w-50', 'mx-auto', 'flex-wrap', 'vh-100', 'justify-content-center');

  container.appendChild(div1);
  div1.appendChild(h1);
  div1.appendChild(locationTitle);
  div1.appendChild(locationText);
  div1.appendChild(contactTitle);
  div1.appendChild(contactText);
  div1.appendChild(finalText);
};

export default contact;
