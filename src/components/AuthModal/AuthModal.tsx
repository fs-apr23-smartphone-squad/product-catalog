import { NavLink } from 'react-router-dom';
import './AuthModal.scss';
import { useEffect } from 'react';

/* eslint-disable */
type Props = {
  onCloseModalClick: () => void;
}

export const AuthModal: React.FC<Props> = ({ onCloseModalClick }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="auth-modal">
      <form className="login">
        <div>
          <button className="close" onClick={onCloseModalClick}>
            +
          </button>
        </div>

        <h2>Welcome, User!</h2>

        <p>Please log in</p>

        <input type="email" placeholder="User Email" />

        <input type="password" placeholder="Password" />

        <input type="submit" value="Log In" />

        <div className="links">
          <a href="/">Forgot password</a>

          <NavLink to="/register">Register</NavLink>
        </div>
      </form>
    </div>
  );
};
