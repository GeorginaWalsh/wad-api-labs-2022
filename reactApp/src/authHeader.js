import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "./authContext";

const BaseAuthHeader = (props) => {
  const context = useContext(AuthContext);
  const { history } = props;

  return context.isAuthenticated ? (
    <>
    <p>
      Welcome {context.userName}! 
    </p>
    <button onClick={() => context.signout()}>Sign out</button>
    </>
  ) : (
    <>
    <p>
      You are not logged in{" "}
    </p>
    <button onClick={() => history.push("/login")}>Login</button>
    </>
  );
};

export default withRouter(BaseAuthHeader);