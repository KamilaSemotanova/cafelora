import { Drink } from '../components/Drink';
import './style.css';

export const DrinkList = () => {
  const element = document.createElement('div');
  element.classList.add('drinks-list');

  element.append(Drink());
  return element;
};
