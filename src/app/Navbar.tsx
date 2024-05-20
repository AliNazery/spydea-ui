import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">Brand</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 text-white">
            <li><a href="#" className="block py-2 px-4">Home</a></li>
            <li><a href="#" className="block py-2 px-4">About</a></li>
            <li><a href="#" className="block py-2 px-4">Services</a></li>
            <li><a href="#" className="block py-2 px-4">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
