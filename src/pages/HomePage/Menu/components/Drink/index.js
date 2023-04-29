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
  </div>
  `;

  // const orderBtnElm = element.querySelector('.order-btn');

  // orderBtnElm.addEventListener("click",() => {fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`),{

  // }})

  // if (ordered === true) {
  //   orderBtnElm.innerHTML = 'Zrušit';
  //   orderBtnElm.classList.add('order-btn--ordered');
  // }

  const drinkInfo = element.querySelector('.drink__info');

  layers.map((layer) => {
    drinkInfo.append(Layer(layer));
  });

  return element;
};
