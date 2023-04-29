import './style.css';

export const DrinkList = () => {
  const element = document.createElement('div');
  element.classList.add('drinks-list');

  element.innerHTML += `
  <div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src="https://cafelora.kodim.app/assets/cups/espresso.png">
    </div>
    <div class="drink__info">
      <h3>Espresso</h3>
      <div class="layer">
        <div class="layer__color" style="background-color: #613916"></div>
        <div class="layer__label">espresso</div>
      </div>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>
</div>

<div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src="https://cafelora.kodim.app/assets/cups/doppio.png">
    </div>
    <div class="drink__info">
      <h3>Doppio</h3>
      <div class="layer">
        <div class="layer__color" style="background-color: #613916"></div>
        <div class="layer__label">espresso</div>
      </div>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>
</div>

<div class="drink">
  <div class="drink__product">
    <div class="drink__cup">
      <img src="https://cafelora.kodim.app/assets/cups/lungo.png">
    </div>
    <div class="drink__info">
      <h3>Lungo</h3>
      <div class="layer">
        <div class="layer__color" style="background-color: #b0dee1"></div>
        <div class="layer__label">voda</div>
      </div>
      <div class="layer">
        <div class="layer__color" style="background-color: #613916"></div>
        <div class="layer__label">espresso</div>
      </div>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>
  </div>
`;
  return element;
};
