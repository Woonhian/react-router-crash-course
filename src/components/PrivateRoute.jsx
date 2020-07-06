import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Route, Redirect } from "react-router-dom";

// Children and the rest of the props
const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
