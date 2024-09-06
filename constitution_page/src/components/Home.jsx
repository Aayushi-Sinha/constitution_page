// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <nav>
        <ul>
          <li><Link to="/glossary">Go to Glossary Page</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default Home;