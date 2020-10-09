import React from "react";
import AppContainer from "../AppContainer/AppContainer";
import LoginContainer from "../LoginContainer/LoginContainer";
import useAuth from "./hooks/useAuth";

const AuthContainer = () => {
  const user = useAuth();

  return user ? (
    <AppContainer />
  ) : (
    <LoginContainer />
  );
};

export default AuthContainer;
