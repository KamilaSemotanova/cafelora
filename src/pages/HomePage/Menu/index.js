import './style.css';
import { DrinkList } from './DrinkList';
import { OrderDetail } from './components/OrderDetails';

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

  if (drinks === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
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

  element.append(OrderDetail());

  return element;
};
