import React from "react";
import { login } from "./utils";

const LoginContainer = () => (
  <div>
    <h1>Hi, stranger</h1>
    <button onClick={login}>Log in</button>
  </div>
);

export default LoginContainer;
