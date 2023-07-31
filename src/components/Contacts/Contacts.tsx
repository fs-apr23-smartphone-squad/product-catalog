import './contacts.scss';

export const Contacts = () => (
  <div className="contacts">
    <ul className="contacts__list">
      <li className="contacts__item">
        <a
          className="contacts__link"
          href="https://github.com/fs-apr23-smartphone-squad/layout"
          target="_blank"
        >
          github
        </a>
      </li>

      <li className="contacts__item">
        <a className="contacts__link" href="#contacts"> contacts </a>
      </li>

      <li className="contacts__item">
        <a className="contacts__link" href="#rights"> rights </a>
      </li>
    </ul>
  </div>
);
