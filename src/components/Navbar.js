import React from "react";
import "../styles/Navbar.css";

function Navbar({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h1>Sports Quiz</h1>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
