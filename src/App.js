import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Menu />
      </Router>
    </div>
  );
}

export default App;
