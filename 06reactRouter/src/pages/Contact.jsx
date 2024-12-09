import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="w-full h-screen bg-gray-300 flex flex-col items-center text-lg p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Page</h1>

      {/* Navigation for Nested Routes */}
      <nav className="mb-6 space-x-4">
        <NavLink
          to="contactinfo"
          className={({ isActive }) =>
            `text-blue-500 hover:text-blue-700 text-xl font-bold ${isActive ? "text-red-400" : ""}`
          }
        >
          Contact Info
        </NavLink>
        <NavLink
          to="contactform"
          className={({ isActive }) =>
            `text-blue-500 hover:text-blue-700 text-xl font-bold ${isActive ? "text-red-400" : ""}`
          }
        >
          Contact Form
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default Contact;
