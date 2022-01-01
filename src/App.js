// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreenIssueBoards from "./ScreenIssueBoards";
import ScreenNewIssure from "./ScreenNewIssure";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ScreenIssueBoards />} />
        <Route path="/new_issue" element={<ScreenNewIssure />} />
      </Routes>
    </div>
  );
}

export default App;
