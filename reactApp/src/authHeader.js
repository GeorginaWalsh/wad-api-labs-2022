import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <>
    <a onClick={() => context.signout()}>Welcome {context.userName}! <br/>Sign out</a>
    </>
  ) : (
    <a onClick={() => history.push("/login")}>Login</a>
  );
};

export default withRouter(BaseAuthHeader);