import './PhoneActions.scss';

export const PhoneActions = () => {
  return (
    <div className="phone-actions">
      <div className="phone-actions__title">
        <h4>Avaliable colors</h4>
        <span>ID: 802390</span>
      </div>

      <div className="phone-actions__color">
        <button className="phone-actions__color-select selected gold"></button>
        <button className="phone-actions__color-select silver"></button>
        <button className="phone-actions__color-select rosegold"></button>
        <button className="phone-actions__color-select spacegray"></button>
      </div>

      <div className="phone-actions__capacity">
        <h4>Select capacity</h4>
        <button
          className="phone-actions__capacity-select selected"
        >
          64 gb
        </button>
        <button className="phone-actions__capacity-select">512 gb</button>
        <button className="phone-actions__capacity-select">256 gb</button>
      </div>

      <div className="phone-actions__price">
        <span>$799</span>
        <span className="phone-actions__price-discount">$1199</span>
      </div>

      <div className="phone-actions__buttons">
        <button
          className="phone-actions__buttons-cart"
          // after adding to cart just add disabled class
        >
          Add to cart
        </button>

        <button
          className="phone-actions__buttons-like"
          // same here
        >
        </button>
      </div>

      <div className="phone-actions__info">
        <div>
          <h4>Screen</h4>
          <span>6.5” OLED</span>
        </div>

        <div>
          <h4>Resolution</h4>
          <span>2688x1242</span>
        </div>

        <div>
          <h4>Processor</h4>
          <span>Apple A12 Bionic</span>
        </div>

        <div>
          <h4>RAM</h4>
          <span>3 GB</span>
        </div>
      </div>
    </div>
  );
};
