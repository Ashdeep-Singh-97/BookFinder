// src/Navbar.tsx
import React, { useState } from 'react';
import SideDrawer from './SideDrawer';
interface NavbarProps {
  sendDataToParent: (data: number) => void;
}
const Navbar: React.FC<NavbarProps> = ({ sendDataToParent }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => setDrawerOpen(prevState => !prevState);

  return (
    <div>
      <nav className="bg-red-200 dark:bg-gray-800 text-white fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 py-2">
        {/* Button on the left */}
        <button
          className="text-xl"
          onClick={toggleDrawer}
        >
          ☰
        </button>

        {/* Heading centered */}
        <h1 className="bg-red-200 text-4xl text-orange-700 py-5 text-center underline dark:bg-gray-800 dark:text-white flex-1">
          Find Your Book
        </h1>
      </nav>
      <SideDrawer sendDataToParent={sendDataToParent} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default Navbar;
