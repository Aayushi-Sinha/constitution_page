import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Glossary from './components/glossary';
import RouteMap from './components/RouteMap';
import Index from './components/index';
import Leaderboard from './components/leaderboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/preamble" element={ <RouteMap/>} />
        <Route path="/index" element={ <Index/>} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
}
export default App;
