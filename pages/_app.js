import "../styles/globals.scss";
import React, { useReducer, useEffect } from "react";
import { AuthContext } from "../auth/AuthContext";
import { authReducer } from "../auth/authReducer";

const init = () => {
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER)
    return JSON.parse(localStorage.getItem("user")) || { logged: false };
  return null;
};

function MyApp({ Component, pageProps }) {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  const ISSERVER = typeof window === "undefined";

  useEffect(() => {
    if (!ISSERVER) localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
