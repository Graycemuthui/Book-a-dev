import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SideNav from "./shared/side_nav";
import Developer from "./developer/Developer";
import MainPage from "./developer/MainPage";
import AddBooking from "./booking/AddBooking";
import Bookings from "./booking/Bookings";
import AddDev from "./developer/AddDev";
function App() {
  return (
    <Router>
      <SideNav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/developers/:id" element={<Developer />} />
        <Route path="/add-booking/:id" element={<AddBooking />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/add-developer" element={<AddDev />} />
      </Routes>
    </Router>
  );
}

export default App;
