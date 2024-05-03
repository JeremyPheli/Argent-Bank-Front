import "../styles/main.css";

const Login = () => {
  return (
    <main className="main main-login">
      <section className="form-login">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <a href="./user.html" class="sign-in-button">
            Sign In
          </a>
        </form>
      </section>
    </main>
  );
};

export default Login;
