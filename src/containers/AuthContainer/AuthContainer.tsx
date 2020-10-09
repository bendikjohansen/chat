import React from "react";
import LoginContainer from "../LoginContainer/LoginContainer";
import AppContainer from "../AppContainer/AppContainer";
import useAuth from "./hooks/useAuth";

const AuthContainer = () => {
  const isLoggedIn = useAuth();

  return isLoggedIn ? (
    <AppContainer />
  ) : (
    <LoginContainer />
  );
};

export default AuthContainer;
