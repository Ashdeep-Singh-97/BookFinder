import React, { useState, useEffect, useRef } from 'react';
import SideDrawer from './SideDrawer';
import { gsap } from "gsap";

interface NavbarProps {
  sendDataToParent: (data: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sendDataToParent }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const titleRef = useRef<HTMLDivElement | null>(null); // Reference to the title div

  const toggleDrawer = () => setDrawerOpen(prevState => !prevState);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 }, // Start hidden and below its final position
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.7 } // Animate to visible and its final position
      );
    }
  }, []);

  return (
    <div>
      <nav className="bg-gradient-to-r from-brown-600 via-brown-500 to-brown-400 text-white fixed top-0 left-0 w-full z-40 flex items-center px-6 py-4 shadow-lg">
        {/* Button on the left */}
        <button
          className="text-3xl text-white hover:opacity-80 transition-transform transform hover:scale-105"
          onClick={toggleDrawer}
        >
          ☰
        </button>

        {/* Heading centered */}
        <h1 className="text-4xl font-bold text-white flex-1 text-center pt-3">
          <div ref={titleRef} className="title inline-block">
            Find Your Book
          </div>
        </h1>
      </nav>
      <SideDrawer sendDataToParent={sendDataToParent} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </div>
  );
};

export default Navbar;
