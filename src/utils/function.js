import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../services/storage";

export function RequireAuth({ children }) {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    let token = getLocalStorageItem("token");
    if (!token) {
      console.log({ from: location }, "hi", location);
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      navigate("/");
      return;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      RequireAuth
      <hr />
      {children}
    </div>
  );
}

export function sampleFunction() {
  return <div>functionOne</div>;
}

export function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
