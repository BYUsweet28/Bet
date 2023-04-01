import React from "react";
import "./App.css";
// import { useState } from "react";
import HomePage from "./Home";
import Navbar from "./Navbar";
import MovieCollection from "./Movies";
import MyPodcasts from "./Podcasts";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* The Paths to each of the pages on the navigation bar */}
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MovieCollection />} />
            <Route path="/podcasts" element={<MyPodcasts />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
