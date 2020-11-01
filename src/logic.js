/* eslint-disable import/no-cycle */

import contact from './contact';
import home from './home';
import menu from './menu';
import clear from './clearPage';

const btnFunctionality = (classes) => {
  if (classes.contains('home')) {
    clear();
    home();
  } else if (classes.contains('menu')) {
    clear();
    menu();
  } else {
    clear();
    contact();
  }
};

export default btnFunctionality;