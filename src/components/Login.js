import React, { useState } from "react";
import "../styles/LoginSignup.css";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      alert("Invalid credentials!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    setUser(user);
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
