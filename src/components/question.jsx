/* eslint-disable react/prop-types */

import React from "react";

const Question = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div className="question">
      <h3>{question.question}</h3>
      <ul className="options">
        {question.options.map((option) => (
          <li key={option.text}>
            <button onClick={() => onAnswerClick(option.isCorrect)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
