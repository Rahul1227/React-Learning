import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; // Importing a search icon from react-icons


function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product'); // Navigate to search page when search button is clicked
  };
  return (
    <div className=''>
      <nav className="px-4 py-2 border-5 border-gray-500 outline-none shadow-2xl shadow-white flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center w-1/5">
          <img
            src="https://www.shutterstock.com/image-vector/circle-business-logo-company-name-260nw-1922534714.jpg"
            width={100}
            alt="Logo"
            className="mr-6"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-6 flex items-center relative">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-black p-2 rounded-md w-4/5 pr-10"
          />
          <button className="absolute right-[10%] text-gray-700"
                            onClick={handleClick}
          >
            <FiSearch size={20} />
          </button>
        </div>

        {/* Navigation NavLinks */}
        <ul className="flex items-center space-x-6 w-2/5 justify-around text-black font-extrabold text-xl
         cursor-pointer shadow-md shadow-zinc-300 h-12 rounded-3xl">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            <li>Product</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            <li>About</li>
          </NavLink>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            <li>Jobs</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
