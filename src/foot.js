const foot = () => {
  const container = document.getElementById('content');
  const footer = document.createElement('footer');
  const footText = document.createElement('p');

  footText.textContent = 'SushiMall® this is not a registered mark, it was only created with educational porpuses.';

  footer.classList.add('d-flex', 'justify-content-center', 'fixed-bottom', 'bg-secondary');
  footText.classList.add('py-1', 'text-white');

  container.appendChild(footer);
  footer.appendChild(footText);
};

export default foot;
