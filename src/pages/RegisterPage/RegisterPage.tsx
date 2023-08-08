import './RegisterPage.scss';

export const RegisterPage = () => {
  return (
    <div className="register">
      <form className="register__form">
        <h2>Welcome, User!</h2>

        <p>Please register</p>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <input type="password" placeholder="Confirm password" />

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};
