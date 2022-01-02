import React from "react";
import { Routes, Route } from "react-router-dom";
import ScreenCurrentIssue from "./ScreenCurrentIssue";
import ScreenIssueBoards from "./ScreenIssueBoards";
import ScreenNewIssue from "./ScreenNewIssue";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ScreenIssueBoards />} />
        <Route path="/new_issue" element={<ScreenNewIssue />} />
        <Route path="/current_task/:taskId" element={<ScreenCurrentIssue />} />
      </Routes>
    </div>
  );
}

export default App;
