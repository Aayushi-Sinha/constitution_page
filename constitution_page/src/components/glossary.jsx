// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Glossary = () => {
  return (
    <div>
      <h1>G Page</h1>
      <p>Welcome to the G page!</p>
      <nav>
        <ul>
          <li><Link to="/">Go to Home Page</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default Glossary;