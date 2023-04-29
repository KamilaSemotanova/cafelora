import './style.css';
import { DrinkList } from './DrinkList';

export const Menu = () => {
  const element = document.createElement('section');
  element.classList.add('menu');
  element.setAttribute('id', 'menu');

  element.innerHTML += `
  <div class="container">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    `;
  element.append(DrinkList());

  element.innerHTML += `
    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>`;

  return element;
};
