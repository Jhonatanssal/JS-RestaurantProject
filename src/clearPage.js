/* eslint-disable no-unused-vars */

const clear = () => {
  const what = document.getElementById('main-element');
  what.parentNode.removeChild(what);
};

export default clear;