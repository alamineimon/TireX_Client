import React from 'react';

const SaredButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gray-800 text-white ${classes}`}
    >
      {children}
    </button>
  );
};

export default SaredButton;