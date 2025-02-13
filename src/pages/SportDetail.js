import React from "react";
import Quiz from "../components/Quiz";
import AnimatedGames from "../components/AnimatedGames";
import Activities from "../components/Activities";

function SportDetail({ sport }) {
  return (
    <div>
      <h1>{sport} Details</h1>
      <Quiz sport={sport} />
      <AnimatedGames sport={sport} />
      <Activities sport={sport} />
    </div>
  );
}

export default SportDetail;
