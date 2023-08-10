import { NavLink } from 'react-router-dom';
import './contacts.scss';

export const Contacts = () => (
  <div className="contacts">
    <ul className="contacts__list">
      <li className="contacts__item">
        <a
          className="contacts__link"
          href="https://github.com/fs-apr23-smartphone-squad"
          target="_blank"
        >
          github
        </a>
      </li>

      <li className="contacts__item">
        <NavLink className="contacts__link" to="/contacts"> contacts </NavLink>
      </li>

      <li className="contacts__item">
        <a
          className="contacts__link"
          href="https://creativecommons.org/licenses/by/4.0/deed.uk"
          target='_blank'
        >
          rights
        </a>
      </li>
    </ul>
  </div>
);
