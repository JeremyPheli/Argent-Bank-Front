import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogin } from "../../services/userLogin";
import { useState } from "react";
import {
  loginPending,
  loginSuccess,
  loginError,
  loginRemember,
} from "./LoginSlice";

const Login = () => {
  const { isLoading, error, isRemember } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [credientials, setCredientials] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ value, name }) => {
    setCredientials({
      ...credientials,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginPending());
    try {
      const isAuth = await userLogin(credientials);

      if (isRemember) {
        localStorage.setItem("token", isAuth.body.token);
      } else {
        localStorage.removeItem("token");
      }

      dispatch(loginSuccess());
      navigate("/profilePage/Profile");
    } catch (error) {
      console.log(error);
      dispatch(loginError(error.response.data.message));
    }
  };

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="email"
                onChange={(e) => {
                  handleChange({ value: e.target.value, name: "email" });
                }}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => {
                  handleChange({ value: e.target.value, name: "password" });
                }}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                defaultChecked={isRemember}
                onChange={() => dispatch(loginRemember(!isRemember))}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" variant="success" className="sign-in-button">
              Sign In
            </button>
            {isLoading && (
              <div className="spinner-border text-success mt-1" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
