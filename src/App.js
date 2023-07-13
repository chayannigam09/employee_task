import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routing/PublicRoutes";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
