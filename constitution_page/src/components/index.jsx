import React from "react";
import "./index.css"; // Import the CSS file
import lawImage from '../images/law.jpg';
import GlossaryImage from '../images/glossary.jpg';
import emblemImage from '../images/emblem.jpg';
import { Link } from 'react-router-dom';
function Index() {
  const gridItems = Array.from({ length: 30 }, (_, i) => i + 11);

  return (
    <div className="container">
      
      {/* Left icon bar */}

      <div className="bar1">
      
        <div className="icon-container">
        <h2>FEATURES</h2>
        <Link to="/"  rel="noopener noreferrer">
            <img src={lawImage} alt="Icon 1" className="icon" />
          </Link>
          <Link to="/glossary"><img src={GlossaryImage} alt="Icon 2" className="icon" /></Link>

          <Link to="/leaderboard" target="_blank" rel="noopener noreferrer">
            <img src={lawImage} alt="Icon 3" className="icon" />
          </Link>
        
          
        </div>
      </div>

      {/* Grid */}
      <div className="grid-container">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className={`grid-item ${index % 2 === 0 ? "bg-green" : "bg-red"} ${index % 3 === 0 ? "has-plant" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Right icon bar */}
      <div className="bar2">
        <div className="icon-container">
          <h2>Games</h2>
          <a href="https://example.com/icon1" target="_blank" rel="noopener noreferrer">
            <img src={lawImage} alt="Icon 1" className="icon" />
          </a>
          <a href="https://example.com/icon2" target="_blank" rel="noopener noreferrer">
            <img src={emblemImage} alt="Icon 2" className="icon" />
          </a>
          <a href="https://example.com/icon3" target="_blank" rel="noopener noreferrer">
            <img src={lawImage} alt="Icon 3" className="icon" />
          </a>
         
        </div>
      </div>
      
    </div>
  );
}

export default Index;















