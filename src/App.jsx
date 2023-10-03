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
import ManageListings from "./Component/Dashboard/ManageListings";
import UsersShow from "./Component/Dashboard/UsersShow";
import HostHomes from "./Component/Unboarding/HostHomes";
import Hosting from "./Component/Dashboard/Hosting";
import ConfirmDetails from "./Component/Dashboard/ConfirmDetails";
import Listings from "./Component/Dashboard/Listings";
import UserDetails from "./Component/UserDetails";
import Reservations from "./Component/Dashboard/Reservations";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/ManageListings" element={<ManageListings />} />
        <Route path="/UsersShow" element={<UsersShow />} />
        <Route path="/HostHomes" element={<HostHomes />} />
        <Route path="/Hosting" element={<Hosting />} />
        <Route path="/ConfirmDetails" element={<ConfirmDetails />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/Reservations" element={<Reservations />} />







      </Routes>
    </Router>
  );
}

export default App;
