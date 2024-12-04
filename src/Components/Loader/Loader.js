import React from "react";
import "./Loader.css";

const Loader = ({ show }) => {
  return show ? <div className="loader">Loading...</div> : null;
};

export default Loader;
