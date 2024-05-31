import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./pages/Login/LoginSlice";
import profileReducer from "./pages/Profile/ProfileSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
    profile: profileReducer,
  },
});

export default store;
