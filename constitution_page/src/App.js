import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Glossary from './components/glossary';
import RouteMap from './components/RouteMap';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/preamble" element={ <RouteMap/>} />

      </Routes>
    </Router>
  );
}
export default App;
