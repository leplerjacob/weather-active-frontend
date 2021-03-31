import React, { Component } from "react";

const Alert = ({message}) => {

  return (
    <div>
      <span className="error">{message}</span>
    </div>
  );
};

export default Alert;
