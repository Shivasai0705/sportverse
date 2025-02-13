import React, { useState } from "react";

const quizData = {
  Cricket: [
    { question: "Who won the 2011 Cricket World Cup?", options: ["India", "Australia"], answer: "India" },
  ],
};

function Quiz({ sport }) {
  const questions = quizData[sport] || [];
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h2>Quiz for {sport}</h2>
      {questions.length > 0 && (
        <div>
          <h3>{questions[index].question}</h3>
          {questions[index].options.map((opt) => (
            <button key={opt} onClick={() => setScore(score + (opt === questions[index].answer ? 1 : 0))}>
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
