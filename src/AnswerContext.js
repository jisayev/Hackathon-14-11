// AnswerContext.js

import { createContext, useContext, useState } from "react";

const AnswerContext = createContext();

export const useAnswerContext = () => {
  return useContext(AnswerContext);
};

export const AnswerProvider = ({ children }) => {
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
  });

  const updateAnswers = (newAnswers) => {
    setAnswers(newAnswers);
  };

  return (
    <AnswerContext.Provider value={{ answers, updateAnswers }}>
      {children}
    </AnswerContext.Provider>
  );
};
