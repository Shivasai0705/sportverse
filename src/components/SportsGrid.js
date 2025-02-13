import React from "react";
import "../styles/SportsGrid.css";

const sports = ["Cricket", "Football", "Basketball", "Tennis", "Badminton"];

function SportsGrid() {
  return (
    <div className="sports-container">
      {sports.map((sport) => (
        <div key={sport} className="sport-card">
          <h3>{sport}</h3>
        </div>
      ))}
    </div>
  );
}

export default SportsGrid;
