import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </div>
  );
}

export default App;
