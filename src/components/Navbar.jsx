import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Safaricom Logo */}
        <h1 className="text-2xl font-bold">Safaricom</h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">M-Pesa</a></li>
          <li><a href="#" className="hover:underline">Internet</a></li>
          <li><a href="#" className="hover:underline">Support</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
