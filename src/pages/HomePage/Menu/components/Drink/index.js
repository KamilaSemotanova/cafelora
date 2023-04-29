import { Layer } from '../Layer';
import './style.css';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  const element = document.createElement('div');
  element.classList.add('drink');

  element.innerHTML += `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="${image}">
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>`;

  const drinkInfo = element.querySelector('.drink__info');
  drinkInfo.append(Layer());

  return element;
};
