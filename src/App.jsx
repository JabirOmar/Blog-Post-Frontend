import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PostDetail from "./pages/PostDetail";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <main className=" App fixed w-screen h-screen bg-[#f5f5f5] overflow-scroll pb-[80px] px-[20px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<PostDetail />} />
      </Routes>
    </main>
  );
}

export default App;
