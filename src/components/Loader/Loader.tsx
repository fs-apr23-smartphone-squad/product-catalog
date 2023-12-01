import './Loader.scss';

/* eslint-disable */
type Props = {
  longLoad: boolean;
};

export const Loader = ({ longLoad = false }) => {
  return (
    <div className="loader__container">
      <div>
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>

      {longLoad && (
        <span className="loader__alert">
          Database is waking up. Please wait...
        </span>
      )}
    </div>
  );
};
