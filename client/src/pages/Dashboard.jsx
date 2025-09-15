import React from "react";

const Dashboard = () => (
  <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in">
    <h1 className="text-4xl font-bold mb-6">Vely Tools</h1>
    <p className="text-xl mb-8">Website Create Bot Telegram dengan panel modern seperti Petrodactyl.<br />Kembangkan dan kelola server bot Telegram Anda dengan mudah!</p>
    <div className="flex gap-4">
      <a href="/login" className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Login</a>
      <a href="/register" className="px-6 py-2 bg-gray-600 rounded hover:bg-gray-700 transition">Register</a>
    </div>
  </div>
);

export default Dashboard;