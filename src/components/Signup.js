import React, { useState } from "react";
import "../styles/LoginSignup.css";

function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.username === username)) {
      alert("Username already exists!");
      return;
    }

    const newUser = { username, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setUser(newUser);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
