import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css"

import Home from "./Pages/Home";
import SideNavbar from "./Components/SideNavbar"

export default function App() {
  return (
    <>
      <SideNavbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
