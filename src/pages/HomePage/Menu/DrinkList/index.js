import { Drink } from '../components/Drink';
import './style.css';

export const DrinkList = (props) => {
  const element = document.createElement('div');
  element.classList.add('drinks-list');

  props.map((drink) => {
    element.append(Drink(drink));
  });

  return element;
};
