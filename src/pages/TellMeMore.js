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
            type="checkbox"
            name="family.schools"
          />
          Schools
        </label>
        <label>
          <input
            type="checkbox"
            name="family.nurseries"
          />
          Nurseries
        </label>
        <label>
          <input
            type="checkbox"
            name="family.parks"
          />
          Parks
        </label>
        <label>
          <input
            type="checkbox"
            name="family.clubs"
          />
          Clubs/Activities
        </label>
      </div>

      <div>
        <p>Lifestyle:</p>
        <label>
          <input
            type="checkbox"
            name="lifestyle.restaurants"
          />
          Restaurants
        </label>
        <label>
          <input
            type="checkbox"
            name="lifestyle.pubs"
          />
          Pubs/Bars
        </label>
        <label>
          <input
            type="checkbox"
            name="lifestyle.places"
          />
          Places of Interest
        </label>
        <label>
          <input
            type="checkbox"
            name="lifestyle.things"
          />
          Things to do
        </label>
      </div>

      <div>
        <p>Travel:</p>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionA"
          />
          Train
        </label>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionB"
          />
          Bus
        </label>
      </div>

      <div>
        <p>Community:</p>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionA"
          />
          Crime
        </label>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionB"
          />
          Demographic
        </label>
      </div>

      <div>
        <p>Population Density:</p>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionA"
          />
          High
        </label>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionB"
          />
          Medium
        </label>
        <label>
          <input
            type="checkbox"
            name="question4"
            value="optionB"
          />
          Low
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
