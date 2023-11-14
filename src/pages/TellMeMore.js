// DepositPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnswerContext } from "../AnswerContext";

function TellMeMore() {
  const { answers, updateAnswers } = useAnswerContext();
  const history = useNavigate();

  const handleAnswerChange = (question, answer) => {
    updateAnswers({
      ...answers,
      [question]: answer,
    });
  };

  const handleNext = () => {
    console.log("Answers:", answers);

    history("/contact");
  };

  return (
    <div>
      <h2>What is important to you about your home?</h2>

      <div>
        <p>Family life:</p>
        <label>
          <input
            type="radio"
            name="question3"
            value="option1"
            checked={answers.question3 === "option1"}
            onChange={() => handleAnswerChange("question3", "option1")}
          />
          Schools
        </label>
        <label>
          <input
            type="radio"
            name="question3"
            value="option2"
            checked={answers.question3 === "option2"}
            onChange={() => handleAnswerChange("question3", "option2")}
          />
          Nurseries
        </label>
        <label>
          <input
            type="radio"
            name="question3"
            value="option3"
            checked={answers.question3 === "option3"}
            onChange={() => handleAnswerChange("question3", "option3")}
          />
          Parks
        </label>
        <label>
          <input
            type="radio"
            name="question3"
            value="option4"
            checked={answers.question3 === "option4"}
            onChange={() => handleAnswerChange("question4", "option4")}
          />
          Clubs/Activities
        </label>
      </div>

      <div>
        <p>Lifestyle:</p>
        <label>
          <input
            type="radio"
            name="question4"
            value="optionA"
            checked={answers.question4 === "optionA"}
            onChange={() => handleAnswerChange("question4", "optionA")}
          />
          Restaurants
        </label>
        <label>
          <input
            type="radio"
            name="question4"
            value="optionB"
            checked={answers.question4 === "optionB"}
            onChange={() => handleAnswerChange("question4", "optionB")}
          />
          Pubs/Bars
        </label>
        <label>
          <input
            type="radio"
            name="question4"
            value="optionB"
            checked={answers.question4 === "optionC"}
            onChange={() => handleAnswerChange("question4", "optionC")}
          />
          Places of Interest
        </label>
        <label>
          <input
            type="radio"
            name="question4"
            value="optionB"
            checked={answers.question4 === "optionD"}
            onChange={() => handleAnswerChange("question4", "optionD")}
          />
          Things to do
        </label>
      </div>

      <button
        onClick={handleNext}
        style={{
          backgroundColor: "#005EB8",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "8px",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default TellMeMore;
