// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" Component={LandingPage} />
      </Routes>
    </>
  );
}

export default App;
