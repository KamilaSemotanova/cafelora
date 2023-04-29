import './style.css';
import { HomePage } from './pages/HomePage/index.js';

const appElement = document.querySelector('#app');

if (location.pathname === '/') {
  appElement.append(HomePage());
}
