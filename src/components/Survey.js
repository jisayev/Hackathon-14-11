// Survey.js
import React, { useState } from "react";

const Survey = ({ onSubmit }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleRadioChange = (e) => {
    setAnswers({ ...answers, [currentPage]: e.target.value });
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSubmit = () => {
    onSubmit(answers);
    setCurrentPage(1); // Reset the survey for future use
    setAnswers({});
  };

  const renderQuestion = () => {
    switch (currentPage) {
      case 1:
        return (
          <>
            <h2>Question 1</h2>
            <p>What is your favorite color?</p>
            <label>
              <input
                type="radio"
                name="color"
                value="Red"
                onChange={handleRadioChange}
                checked={answers[currentPage] === "Red"}
              />
              Red
            </label>
            <label>
              <input
                type="radio"
                name="color"
                value="Blue"
                onChange={handleRadioChange}
                checked={answers[currentPage] === "Blue"}
              />
              Blue
            </label>
          </>
        );
      case 2:
        return (
          <>
            <h2>Question 2</h2>
            <p>How often do you exercise?</p>
            <label>
              <input
                type="radio"
                name="exercise"
                value="Every day"
                onChange={handleRadioChange}
                checked={answers[currentPage] === "Every day"}
              />
              Every day
            </label>
            <label>
              <input
                type="radio"
                name="exercise"
                value="Few times a week"
                onChange={handleRadioChange}
                checked={answers[currentPage] === "Few times a week"}
              />
              Few times a week
            </label>
          </>
        );
      case 3:
        return (
          <>
            <h2>Question 3</h2>
            <p>What is your favorite programming language?</p>
            <label>
              <input
                type="radio"
                name="programmingLanguage"
                value="JavaScript"
                onChange={handleRadioChange}
                checked={answers[currentPage] === "JavaScript"}
              />
              JavaScript
            </label>
            <label>
              <input
                type="radio"
                name="programmingLanguage"
                value="Python"
                onChange={handleRadioChange}
                checked={answers[currentPage] === "Python"}
              />
              Python
            </label>
          </>
        );
      default:
        return (
          <>
            <p>Survey complete! Thank you for participating.</p>
            <button onClick={handleSubmit}>Submit</button>
          </>
        );
    }
  };

  return (
    <div className="survey">
      {renderQuestion()}
      {currentPage <= 3 && answers[currentPage] && (
        <button onClick={handleNext}>Next</button>
      )}
    </div>
  );
};

export default Survey;
