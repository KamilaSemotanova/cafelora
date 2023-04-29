import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Banner } from './Banner';
import { Menu } from './Menu';
import { Galerie } from '../Galerie';
import { Contact } from '../Contact';

export const HomePage = () => {
  const element = document.createElement('main');
  element.append(Header());
  element.append(Banner());
  element.append(Menu());
  element.append(Galerie());
  element.append(Contact());
  element.append(Footer());

  return element;
};
