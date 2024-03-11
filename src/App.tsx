import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { APIContextProvider } from "./context/APIContext";
import { Home, AddEntry, EditEntry } from "./pages";

const App: React.FC = () => {
  return (
    <APIContextProvider>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/add" Component={AddEntry} />
          <Route path="/edit/:id" Component={EditEntry} />
        </Routes>
      </Router>
    </APIContextProvider>
  );
};

export default App;
