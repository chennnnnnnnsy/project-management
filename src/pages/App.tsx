import React from "react";
import { Routes } from "react-router-dom";
import { generateCommonRoutes } from "@/permission";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>{generateCommonRoutes()}</Routes>
    </div>
  );
};

export default App;
