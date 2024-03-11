import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { APIContextProvider } from "./context/APIContext";

const App: React.FC = () => {
  return (
    <APIContextProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          {/* TODO: add new routes for add new entry and edit entry */}
        </Routes>
      </Router>
    </APIContextProvider>
  );
};

export default App;
