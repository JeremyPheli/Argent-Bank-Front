import { Link } from "react-router-dom";
import logoArgentBank from "../assets/img/argentBankLogo.png";
import "../styles/main.css";

const Header = () => {
  return (
    <header>
      <nav className="main-nav">
        <Link to="/">
          <img
            src={logoArgentBank}
            alt="argentbanklogo"
            className="logo-header"
          />
        </Link>
        <Link to="/login" className="main-nav-sign-in">
          <i className="fa fa-user-circle"></i>
          <p>Sign In</p>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
