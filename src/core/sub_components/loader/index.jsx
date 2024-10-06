import React from "react";
import { useSelector } from "react-redux";
import "./loader.scss";

function Loader() {
  const loading = useSelector((store) => store?.loader?.loader);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
