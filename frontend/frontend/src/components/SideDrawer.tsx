import React, { useState } from 'react';

interface SideDrawerProps {
  sendDataToParent: (data: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ sendDataToParent, isOpen, onClose }) => {
  const [filterValue, setFilterValue] = useState<number>(100);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(Number(event.target.value));
    sendDataToParent(Number(event.target.value));
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-brown-600 via-brown-500 to-brown-400 text-white w-64 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <nav className="mt-12 px-4">
          <ul>
            <li className="px-4 py-2 hover:bg-brown-700 transition rounded">
              <a href="#home">Home</a>
            </li>
            <li className="px-4 py-2 hover:bg-brown-700 transition rounded">
              <a href="#about">About</a>
            </li>
            <li className="px-4 py-2 hover:bg-brown-700 transition rounded">
              <a href="#services">Services</a>
            </li>
            <li className="px-4 py-2 hover:bg-brown-700 transition rounded">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="px-4 py-6">
          <h2 className="text-lg font-semibold mb-4">Filter</h2>
          <div className="flex flex-col items-center">
            <p className="text-xl mb-2">Page Count &lt;= {filterValue}</p>
            <input
              type="range"
              min="0"
              max="999"
              value={filterValue}
              onChange={handleFilterChange}
              className="w-full accent-brown-500" // Custom accent color for the range input
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
