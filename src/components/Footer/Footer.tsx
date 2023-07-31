import { Contacts } from '../Contacts';
import './footer.scss';

export const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__logo">
        <a href="#">
          <img
          src=""
          alt="Nice gadgets logo"
          />
        </a>
      </div>

      <Contacts />

      <a className="footer__back-to-top-btn" href="#">
        Back to top

        <div className="footer__back-to-top-btn-icon"></div>
      </a>
    </div>
  </footer>
);
