import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import ListingInfoMain from "./Views/ListingInfo/ListingInfoMain"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListingInfoMain" element={<ListingInfoMain />} />

      </Routes>
    </Router>
  );
}

export default App;
