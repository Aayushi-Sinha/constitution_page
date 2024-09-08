import React, { useState, useEffect } from 'react';
import './RouteMap.css';
import mapiImage from '../images/mapi.jpg'; // Your map image path

const RouteMap = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "The Preamble is an introduction to the Constitution of India, and it explains the guiding values of the Constitution like justice, liberty, equality, and fraternity. The Preamble is an introduction to the Constitution of India, and it explains the guiding values of the Constitution like justice, liberty, equality, and fraternity.";

  // Function to animate text letter by letter
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => prev + fullText[i]);
      i++;
      if (i === fullText.length) {
        clearInterval(interval); // Stop when the full text is displayed
      }
    }, 100); // Speed of letter animation (100ms per letter)
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="route-map-container">
      {/* Left-side image */}
      <div className="image-section">
        <img src={mapiImage} alt="Map" className="route-map-img" />
      </div>

      {/* Right-side text with animation */}
      <div className="text-section">
        <h2>Explanation of the Preamble</h2>
        <p className="animated-text">{displayText}</p>
      </div>
    </div>
  );
};

export default RouteMap;