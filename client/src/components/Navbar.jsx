import React from "react";

const Navbar = () => (
  <nav className="w-full flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg animate-fade-in">
    <div className="text-2xl font-bold text-blue-500">Vely Tools</div>
    <div className="flex gap-4">
      <a href="/" className="hover:text-blue-400">Home</a>
      <a href="/server" className="hover:text-blue-400">Server</a>
      <a href="/admin" className="hover:text-blue-400">Admin</a>
    </div>
  </nav>
);

export default Navbar;