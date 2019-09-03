import menu from '../menu.json';
import dishes from '../template/dish-card.hbs';

const defs = {
  menu: document.querySelector('.menu'),
};
const markup = menu.map(dish => dishes(dish)).join('');
defs.menu.insertAdjacentHTML('afterbegin', markup);