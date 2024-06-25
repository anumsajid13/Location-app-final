import React from 'react';

const Navbar = ({ setSelectedOption }) => {
  return (
    <nav className="flex justify-start items-center p-4 bg-gray-800 text-white w-full fixed top-0 z-50">
      <button
        className="mx-4 p-2 hover:bg-gray-700 focus:outline-none"
        onClick={() => setSelectedOption('color')}
      >
        Locate with Color
      </button>
      <button
        className="mx-4 p-2 hover:bg-gray-700 focus:outline-none"
        onClick={() => setSelectedOption('pointer')}
      >
        Locate with Pointer
      </button>
    </nav>
  );
};

export default Navbar;
