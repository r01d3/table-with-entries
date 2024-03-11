import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { APIContextProvider } from "./context/APIContext";
import { Home, AddEntry } from "./pages";

const App: React.FC = () => {
  return (
    <APIContextProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/add" Component={AddEntry} />
          {/* TODO: add new routes for edit entry */}
        </Routes>
      </Router>
    </APIContextProvider>
  );
};

export default App;
