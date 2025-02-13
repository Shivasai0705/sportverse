import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SportsGrid from "./components/SportsGrid";
import Navbar from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  return (
    <div className="App">
      {user ? (
        <>
          <Navbar setUser={setUser} />
          <SportsGrid />
        </>
      ) : (
        <>
          <Signup setUser={setUser} />
          <Login setUser={setUser} />
        </>
      )}
    </div>
  );
}

export default App;
