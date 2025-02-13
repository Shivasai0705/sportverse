import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Cricket Quiz</h1>
      <p>Test your cricket knowledge with our fun and interactive quiz!</p>
      <Link to="/quiz"><button>Start Quiz</button></Link>
    </div>
  );
};

export default Home;
