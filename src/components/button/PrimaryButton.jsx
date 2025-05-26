import React from "react";

const PrimaryButton = ({ children, onClick, className, style, textClass }) => {
  return (
    <button
      style={style}
      className={`bg-incla-purple h-11 rounded-lg flex items-center justify-center px-8 ${className}`}
      onClick={onClick}
    >
      <p className={`text-base font-bold text-white ${textClass}`}>
        {children}
      </p>
    </button>
  );
};

export default PrimaryButton;
