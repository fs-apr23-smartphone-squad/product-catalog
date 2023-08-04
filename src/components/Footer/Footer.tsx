import cn from 'classnames';
import { Contacts } from '../Contacts';
import './footer.scss';
import logo from '../../images/logo.svg';
import { useState } from 'react';

export const Footer = () => {
  const [btnVisible, setBtnVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setBtnVisible(true);
    } else if (scrolled <= 300) {
      setBtnVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <a href="#">
            <img
              src={`${logo}`}
              alt="Nice gadgets logo"
            />
          </a>
        </div>

        <Contacts />

        <a
          className={cn(
            'footer__back-to-top-btn',
            { disabled: !btnVisible },
          )}
          onClick={scrollToTop}
        >
          Back to top
          <div className="footer__back-to-top-btn-icon"></div>
        </a>
      </div>
    </footer>
  );
};
