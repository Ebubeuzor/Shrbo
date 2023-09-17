import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import ListingInfoMain from "./Views/ListingInfoMain";
import Settings from "./Views/Settings";
import Profile from "./Component/Settings/Profile"
import Payments from "./Component/Settings/Payments"
import Security from "./Component/Settings/Security"
import Chat from "./Component/Chat/Chat";
import AccountNotifications from "./Component/Settings/ProfileCardSettings/AccountNotifications";
import "./App.css";
import RequestBook from "./Views/RequestBook";
import AddGovvernmentId from "./Component/Settings/ProfileCardSettings/AddGovernmentId"
import Trip from "./Component/TripHistory/Trip"
import WishList from "./Views/WishList"
import WishlistsSet from "./Component/WishList/WishlistsSet" ;
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
        <Route path="/AccountNotifications" element={<AccountNotifications />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Trip" element={<Trip />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/WishlistsSet" element={<WishlistsSet />} />





      </Routes>
    </Router>
  );
}

export default App;
