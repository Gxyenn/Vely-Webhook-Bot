import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import ServerDashboard from "./pages/ServerDashboard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navbar from "./components/Navbar";
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <ThemeSwitcher />
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/server/:id" element={<ServerDashboard />} />
      </Routes>
      <footer className="text-center p-4 animate-bounce">
        Creator: <a href="https://t.me/Gxyenn969" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-500">Gxyenn</a>
      </footer>
    </Router>
  );
}

export default App;