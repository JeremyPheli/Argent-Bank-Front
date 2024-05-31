import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import { Provider } from "react-redux";
import store from "./store";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginPage/signIn" element={<Login />} />
          <Route path="/profilePage/profile" element={<PrivateRoute />}>
            <Route path="/profilePage/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
