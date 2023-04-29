import './style.css';
import { DrinkList } from './DrinkList';

export const Menu = (props) => {
  const { drinks } = props;

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

  element.innerHTML += `
    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>`;

  if (drinks === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        element.replaceWith(Menu({ drinks: data.result }));
      });
  } else {
    element.append(DrinkList(drinks));
  }

  return element;
};
