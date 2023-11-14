// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnswerProvider } from "./AnswerContext";
import Deposit from "./pages/DepositPage";
import TellMeMore from "./pages/FinalTable";
import ContactPage from "./pages/ContactPage";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import headerImage from "./images/halifax-logo.png";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <AnswerProvider>
        <Router>
          <div>
            <header
              className="app-header"
              style={{
                backgroundColor: "#005EB8",
                padding: "10px",
                color: "white",
              }}
            >
              <img
                src={headerImage}
                alt="Header"
                style={{ maxHeight: "150px", objectFit: "cover" }}
              />
              <h1>Find Your Home</h1>
            </header>
            <div className="app-body">
              <Routes>
                <Route path="/" exact element={<Deposit />} />
                <Route path="/about" element={<TellMeMore />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </div>
            <footer
              style={{
                backgroundColor: "#005EB8",
                padding: "10px",
                color: "white",
                marginTop: "20px",
              }}
            >
              <p>&copy; 2023 Your App Name. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </AnswerProvider>
    </DndProvider>
  );
}

export default App;
