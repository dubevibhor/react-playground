import React, { useState } from "react";

const DarkLightMode = () => {
  const [theme, setTheme] = useState("light");
  const handleModeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#333" : "#fff",
      }}
    >
      <button
        style={{
          background: theme === "light" ? "#333" : "#fff",
          color: theme === "light" ? "#fff" : "#333",
        }}
        onClick={handleModeChange}
      >
        Change Mode
      </button>
    </div>
  );
};

export default DarkLightMode;
