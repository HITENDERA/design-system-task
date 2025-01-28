import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded-lg px-4 py-2 font-semibold ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;