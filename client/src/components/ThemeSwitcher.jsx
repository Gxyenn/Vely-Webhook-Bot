import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [dark, setDark] = useState(true);
  React.useEffect(() => {
    document.body.className = dark ? "bg-gradient-to-br from-gray-900 to-blue-700 text-white" : "bg-gradient-to-br from-white to-blue-100 text-black";
  }, [dark]);
  return (
    <button onClick={() => setDark(!dark)} className="absolute top-4 right-4 px-4 py-2 rounded shadow-lg bg-gray-700 hover:bg-gray-900 text-white">
      {dark ? "🌙 Gelap" : "☀️ Terang"}
    </button>
  );
};

export default ThemeSwitcher;