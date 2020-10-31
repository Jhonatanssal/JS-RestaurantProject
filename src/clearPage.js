const clear = () => {
  const element = document.getElementById('main-element');
  element.parentNode.removeChild(element);
};

export default clear;