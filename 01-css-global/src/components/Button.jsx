import React from "react";

export default function Button({ children, type = "solid", onClick, disabled }) {
  return (
    <button
      className={`btn ${type}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
