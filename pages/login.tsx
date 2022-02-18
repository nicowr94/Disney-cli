import React, { useContext } from "react";
import PageLogin from "../components/organisms/pageLogin/pageLogin";
import { AuthContext } from "./../auth/AuthContext";
import Router from 'next/router';

export default function Login() {

  const { user } = useContext(AuthContext);
  if(user?.logged) Router.replace("/")
  return (
    <PageLogin/>
  );
}

