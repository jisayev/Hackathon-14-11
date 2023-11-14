// DepositPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAnswerContext } from "../AnswerContext";

function DepositPage() {
  const { answers, updateAnswers } = useAnswerContext();

  // Ensure that selectedCounties and selectedTowns are initialized with empty arrays
  const initialSelectedCounties = answers.selectedCounties || [];
  const initialSelectedTowns = answers.selectedTowns || [];

  const [selectedCounties, setSelectedCounties] = useState(
    initialSelectedCounties
  );
  const [selectedTowns, setSelectedTowns] = useState(initialSelectedTowns);

  const handleAnswerChange = (question, answer) => {
    updateAnswers({
      ...answers,
      [question]: answer,
    });
  };

  const amount = "300,000";

  const history = useNavigate();

  const handleNext = () => {
    console.log("Answers:", answers);

    history("/about");

    updateAnswers({
      ...answers,
      selectedCounties,
      selectedTowns,
    });
  };

  const englandTowns = [
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Leeds",
    "Bristol",
    "Newcastle",
    "Nottingham",
  ];

  const englandCounties = [
    { name: "Greater London", towns: ["London"] },
    { name: "Greater Manchester", towns: ["Manchester"] },
    { name: "West Yorkshire", towns: ["Leeds", "Wakefield"] },
    // Add more counties and towns as needed
  ];

  return (
    <div>
      <h2>Deposit Page</h2>
      <p>Your maximum borrowing is £{amount}</p>

      <div>
        <p>What is the deposit amount?</p>
        <input
          type="text"
          value={answers.question1}
          onChange={(e) => handleAnswerChange("question1", e.target.value)}
        />
      </div>

      <div>
        <p>Let's narrow the search:</p>
        <div>
          <label>
            <input
              type="radio"
              value="Select distance from a location"
              checked={answers.question2 === "Yes"}
              onChange={() => handleAnswerChange("question2", "Yes")}
            />
            Select distance from a location
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Select by region"
              checked={answers.question2 === "No"}
              onChange={() => handleAnswerChange("question2", "No")}
            />
            Select by region
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Anywhere in the UK"
              checked={answers.question2 === "any"}
              onChange={() => handleAnswerChange("question2", "any")}
            />
            Anywhere in the UK
          </label>
        </div>
      </div>

      {answers.question2 === "Yes" && (
        <div>
          <p>Great! Please select a town:</p>
          <select
            value={answers.selectedTown || ""} // Use the selectedTown from the state
            onChange={(e) => handleAnswerChange("selectedTown", e.target.value)}
          >
            <option value="" disabled>
              Select a town
            </option>
            {englandTowns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
          </select>
        </div>
      )}

      {answers.question2 === "No" && (
        <div>
          <p>No worries! Please select one or more counties and towns:</p>
          {englandCounties.map((county) => (
            <div key={county.name}>
              <input
                type="checkbox"
                id={county.name}
                checked={selectedCounties.includes(county.name)}
                onChange={() => {
                  const updatedCounties = selectedCounties.includes(county.name)
                    ? selectedCounties.filter((c) => c !== county.name)
                    : [...selectedCounties, county.name];

                  setSelectedCounties(updatedCounties);
                }}
              />
              <label htmlFor={county.name}>{county.name}</label>

              <div style={{ marginLeft: "20px" }}>
                {county.towns.map((town) => (
                  <div key={town}>
                    <input
                      type="checkbox"
                      id={town}
                      checked={selectedTowns.includes(town)}
                      onChange={() => {
                        const updatedTowns = selectedTowns.includes(town)
                          ? selectedTowns.filter((t) => t !== town)
                          : [...selectedTowns, town];

                        setSelectedTowns(updatedTowns);
                      }}
                    />
                    <label htmlFor={town}>{town}</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

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

export default DepositPage;
