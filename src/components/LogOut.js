import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginOut } from "../pages/Login/LoginSlice";
import { profileOut } from "../pages/Profile/ProfileSlice";

const LogOut = () => {
  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function ClearLocalStorage() {
    localStorage.clear();

    dispatch(loginOut());
    dispatch(profileOut());
  }

  return (
    <>
      {isAuth && (
        <Link
          className="main-nav-item"
          onClick={() => ClearLocalStorage()}
          to="/"
        >
          <i className="fa-solid fa-arrow-right-from-bracket" />
          Sign Out
        </Link>
      )}
    </>
  );
};

export default LogOut;
