import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './leaderboard.css';
import Footer from './Footer.jsx';
import badge1 from '../images/badge1.png';
import badge2 from '../images/badge2.png';
import badge3 from '../images/badge3.png';
import badge4 from '../images/badge4.png';

const Leaderboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textModified, setTextModified] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollPosition = window.scrollY;
      setScrollPosition(newScrollPosition);
      setTextModified(newScrollPosition > 100); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const colorSet2 = {
    backgroundColor: '#1E3E49', 
    textColor: '#FFF' 
  };

  const colorSet1 = {
    backgroundColor: '#183151',
    textColor: '#FFF'
  };

  const threshold1 = 100;
  const currentColorSet = scrollPosition < threshold1 ? colorSet1 : colorSet2;

  const navbarStyle = {
    backgroundColor: currentColorSet.backgroundColor,
    boxShadow: scrollPosition > threshold1 ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
    transition: 'background-color 0.5s ease',
  };

  const logoStyle = {
    transform: `scale(${Math.max(1 - scrollPosition / 900, 0.95)})`,
    color: currentColorSet.textColor, 
  };

  const logoText = textModified ? '🏛️ Institutions and Constitution' : '🏛️ Institutions and Constitution';

    const [period] = useState(0);


    const profiledb = [
        {
            name: "Anshika Aggarwal",
            location: "India",
            score: 1550,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2022-02-10"
        },
        {
            name: "Sanskriti Vidushi",
            location: "India",
            score: 2310,
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2021-01-01"
        },
        {
            name: "Anshika Arora",
            location: "India",
            score: 350,
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2021-08-17"
        },
        {
            name: "Aayushi Sinha",
            location: "India",
            score: 2100,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2021-10-23"
        },
        {
            name: "Nishi",
            location: "India",
            score: 1250,
            img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2022-01-22"
        },
        {
            name: "Aditi",
            location: "India",
            score: 5250,
            img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2022-01-21"
        }
    ]
    
    function Profiles({ data }) {
      return (
          <div id="profile">
              {data.map((value, index) => (
                  <div className="profile-grid" key={index}>
                      <div className="profile-item">
                          <img src={value.img} alt={value.name} />
                      </div>
                      <div className="profile-item name-country">
                          <h3 className="name text-dark">{value.name}</h3>
                          <span>{value.location}</span>
                      </div>
                      <div className="profile-item score">
                          <span>{value.score}</span>
                      </div>
                  </div>
              ))}
          </div>
      );
  }
  

    function between(data, days) {
        const today = new Date();
        const previous = new Date(today);
        previous.setDate(previous.getDate() - days);

        let filtered = data.filter((val) => {
            let userDate = new Date(val.dt);
            if (days === 0) return true;
            return previous <= userDate && today >= userDate;
        });
        return filtered.sort((a, b) => b.score - a.score);
    }
  
  
    const dataProgress = [
      { part:1, name: "I, The Union and Its Territories", completed: 1, inProgress: 0, available: 4, locked: 0, totalExercises: 4 },
      { part:2,name: "II, Citizenship", completed: 0, inProgress: 0, available: 2, locked: 5, totalExercises: 7 },
      { part:3,name: "III, Fundamental Rights", completed: 1, inProgress: 1, available: 5, locked: 0, totalExercises: 24 },
      { part:4,name: "IV, Directive Principles of State Policy", completed: 1, inProgress: 0, available: 1, locked: 0, totalExercises: 16 },
      { part:5,name: "IVA, Fundamental Duties", completed: 0, inProgress: 0, available: 10, locked: 5, totalExercises: 1 },
      { part:6,name: "V, The Union", completed: 50, inProgress: 1, available: 98, locked: 2, totalExercises: 100 },
      { part:7,name: "VI, The States", completed: 1, inProgress: 0, available: 4, locked: 0, totalExercises: 86 },
      { part:8,name: "VII, States in the B part of the first schedule (repealed)", completed: 0, inProgress: 0, available: 1, locked: 0, totalExercises: 1 },
      { part:9,name: "VIII, Union Territories", completed: 1, inProgress: 1, available: 5, locked: 0, totalExercises: 4},
      { part:10,name: "IX, Panchayats", completed: 1, inProgress: 0, available: 4, locked: 0, totalExercises: 15 },
  ];
    
    function ProgressGrid({ partData }) {
      return (
        <div className="progress-container">
          <div className="progress-track">
            {Array(partData.totalExercises).fill().map((_, index) => {
              if (index < partData.completed) {
                return <div key={index} className="dot completed"></div>;
              } else if (index < partData.completed + partData.inProgress) {
                return <div key={index} className="dot in-progress"></div>;
              } else if (index < partData.completed + partData.inProgress + partData.available) {
                return <div key={index} className="dot available"></div>;
              } else {
                return <div key={index} className="dot locked"></div>;
              }
            })}
          </div>
    
          <div className="exercise-info">
            <div>
              <h2>{partData.completed}</h2>
              <p>Completed</p>
            </div>
            <div>
              <h2>{partData.available}</h2>
              <p>Available</p>
            </div>
            <div>
              <h2>{partData.inProgress}</h2>
              <p>In Progress</p>
            </div>
            <div>
              <h2>{partData.locked}</h2>
              <p>Locked</p>
            </div>
            <div>
              <h2>{partData.totalExercises}</h2>
              <p>Total Articles</p>
            </div>
          </div>
        </div>
      );
    }
    
    return (
        <div>
      <header className="navbar" style={navbarStyle}>
      <div className="container1">
        <div className="logo" style={logoStyle}>
          <h1>{logoText}</h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/leaderboard" >Tracks</Link></li>
            <li><Link to="/glossary" >Login</Link></li>
            <li><Link to="/glossary" >Sign Up</Link></li>
          </ul>
        </nav>
      </div>
      </header>
        <section id="track">
          <div className="tracks">
          <h1>Tracks</h1>
          <div className='track1'>
            <h3>For ease of learning, the tracks have been divided into 26 sections, based on each part of the constitution. The locked articles are based on previously covered and hence will unlock as you complete the previous articles.</h3>
            </div>
            {dataProgress.map(partData => {
            // Calculate percentage outside JSX
            const num = ((partData.completed / partData.totalExercises) * 100).toFixed(2);
            return (
              <div key={partData.part} className="track1">
                <h2>Part: {partData.name}</h2>
                <h3>You are {num}% through this track. Keep up the good work! 🚀</h3>
                <div className="progress-section">
                  <ProgressGrid partData={partData} />
                </div>
              </div>
            );
          })}
        </div>
          <div className="lb">
              <h1>Your Badges</h1>
              <div className="badges">
                <div>
                <img src={badge1} alt="Icon 1" className="icon" />
                <p>20 Articles Badge</p>
              </div>
              <div>
                <img src={badge2} alt="Icon 1" className="icon" />
                <p>50 Articles Badge</p>
              </div>
              <div>
                <img src={badge3} alt="Icon 1" className="icon" />
                <p>20 Articles Badge</p>
              </div>
              <div>
                <img src={badge4} alt="Icon 1" className="icon" />
                <p>Finish Part:I to claim</p>
                </div>
              </div>
          </div>
          <div className="lb">
            <h1 className="leaderboard">Leaderboard</h1>
            <p>Our Top Contributors</p>
            <Profiles data={between(profiledb, period)} />
          </div>
          <div className="lb">
          <h1 className="didyk">Did You Know?</h1>
            <p className="didyk-p">The original 1950 Constitution is kept in a nitrogen-filled case at the Old Parliament House in New Delhi.</p>
        </div>
        </section>
        <div className='footer'>
                <Footer/>
            </div>
      </div>   
      
    );
};

export default Leaderboard;