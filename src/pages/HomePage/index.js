import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from './Banner';
import { Menu } from './Menu';
import { Galerie } from '../Galerie';
import { Contact } from '../Contact';

export const HomePage = () => {
  const element = document.createElement('main');
  element.setAttribute('id', 'main');

  element.append(Header(), Banner(), Menu({ drinks: 'loading' }),Galerie(), Contact(),Footer());

  return element;
};
