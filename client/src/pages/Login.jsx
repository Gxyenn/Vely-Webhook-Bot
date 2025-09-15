import React from "react";

const Login = () => (
  <div className="flex flex-col items-center justify-center min-h-screen animate-fade-in">
    <h2 className="text-3xl font-bold mb-4">Login</h2>
    <form className="w-full max-w-xs bg-gray-800 p-6 rounded shadow-lg">
      <input type="email" placeholder="Email" className="mb-4 px-4 py-2 w-full rounded" />
      <input type="password" placeholder="Password" className="mb-4 px-4 py-2 w-full rounded" />
      <button className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition">Login</button>
    </form>
    <p className="mt-4">Belum punya akun? <a href="/register" className="text-blue-400">Register</a></p>
  </div>
);

export default Login;