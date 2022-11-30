import React from "react";
import "./react-alert.style.scss";

const Alert = ({ type, message, close }) => {
  const alertType = type || "INFO";
  return (
    <div className={`custom-alert custom-alert-${alertType.toLowerCase()}`}>
      <em className="fas fa-info-circle"></em>
      <p className="custom-alert-content">{message}</p>
      <em className="fas fa-times" onClick={close}></em>
    </div>
  );
};

export default Alert;
