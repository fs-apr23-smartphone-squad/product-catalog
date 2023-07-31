import './Buttons.scss';

export const Buttons = () => (
  <div className="buttons">
    <div className="icon--menu-wrapper">
      <a
        href="#menu"
        className="icon icon--menu"
      ></a>
    </div>

    <div className="icon-wrapper">
      <a
        href="#favourites"
        className="icon icon--favourites"
      ></a>
    </div>

    <div className="icon-wrapper">
      <a
        href="#cart"
        className="icon icon--cart"
      ></a>
    </div>
  </div>
);
