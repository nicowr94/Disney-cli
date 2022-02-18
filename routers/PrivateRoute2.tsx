import React from "react";
// import { Redirect, Route } from "react-router-dom";
import Router from 'next/router';
import PropTypes from "prop-types";

export default function PrivateRoute({
  isAuthenticated,
  component: Component,
  ...rest
}) {
  localStorage.setItem("lastPath", rest.location.pathname);
  const login = '/login?redirected=true'; // Define your login route address.
  return (
    <Router
      {...rest}
      component={(props) =>
        // isAuthenticated ? <Component {...props} /> : <Redirect to="/Login" />
        isAuthenticated ? <Component {...props} /> : Router.replace(login)
      }
    />
  );
}

PrivateRoute.protoType = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
