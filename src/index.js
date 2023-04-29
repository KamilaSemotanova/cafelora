import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Banner } from './pages/HomePage/components/Banner';
import { Menu } from './pages/HomePage/components/Menu';
import { Galerie } from './pages/HomePage/components/Galerie';
import { Contact } from './pages/HomePage/components/Contact';
import { HomePage } from './pages/HomePage/index.js';
import { OrderPage } from './pages/OrderPage';

const appElement = document.querySelector('#app');

const { pathname } = window.location;

if (pathname === '/') {
  appElement.append(
    HomePage(),
    Header({ showMenu: true }),
    Banner(),
    Menu({ drinks: 'loading' }),
    Galerie(),
    Contact(),
    Footer(),
  );
} else if (pathname === '/objednavka') {
  appElement.append(OrderPage());
}
