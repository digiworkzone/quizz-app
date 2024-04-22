import React from "react";

const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
        correctly
        <span onClick={resetQuiz}>Click below to play again</span>
      </p>
      <ul>
        {questions.map((question, index) => {
          return (
            <li key={index} data-correct={userAnswers[index]}>
              Q{index + 1}.{question.question}
              {userAnswers[index] ? "    - Correct" : "    -  Wrong"}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Result;
