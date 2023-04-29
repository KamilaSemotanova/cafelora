import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Banner } from './pages/HomePage/components/Banner';
import { Menu } from './pages/HomePage/components/Menu';
import { Galerie } from './pages/HomePage/components/Galerie';
import { Contact } from './pages/HomePage/components/Contact';
import { HomePage } from './pages/HomePage/index.js';

const appElement = document.querySelector('#app');

appElement.append(
  HomePage(),
  Header(),
  Banner(),
  Menu({ drinks: 'loading' }),
  Galerie(),
  Contact(),
  Footer(),
);

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
