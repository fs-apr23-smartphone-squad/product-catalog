import { Buttons } from '../Buttons';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__left">
      <Logo />

      <Navigation />
    </div>

    <Buttons />
  </header>
);
