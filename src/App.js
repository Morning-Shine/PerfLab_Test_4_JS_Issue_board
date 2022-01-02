import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreenIssueBoards from "./ScreenIssueBoards";
import ScreenNewIssue from "./ScreenNewIssue";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ScreenIssueBoards />} />
        <Route path="/new_issue" element={<ScreenNewIssue />} />
      </Routes>
    </div>
  );
}

export default App;
