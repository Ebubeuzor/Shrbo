import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import ListingInfoMain from "./Views/ListingInfoMain";
import Settings from "./Views/Settings";
import Profile from "./Component/Settings/Profile"
import Payments from "./Component/Settings/Payments"
import Security from "./Component/Settings/Security"
import "./App.css";
import RequestBook from "./Views/RequestBook";
import AddGovvernmentId from "./Component/Settings/ProfileCardSettings/AddGovernmentId"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ListingInfoMain" element={<ListingInfoMain />} />
        <Route path="/RequestBook" element={<RequestBook/>} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Payments" element={<Payments />} />
        <Route path="/Security" element={<Security />} />
        <Route path="/AddGovvernmentId" element={<AddGovvernmentId />} />



      </Routes>
    </Router>
  );
}

export default App;
