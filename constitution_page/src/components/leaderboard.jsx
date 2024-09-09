import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import './leaderboard.css';

const Leaderboard = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
  const [textModified, setTextModified] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');

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

  // const linkStyle = {
  //   color: currentColorSet.textColor, 
  // };

  const logoText = textModified ? '🏛️ Institutions and Constitution' : '🏛️ Institutions and Constitution';

    const [period, setPeriod] = useState(0);
    const handleClick = (e) => {
        setPeriod(e.target.dataset.id)
    }


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
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
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
            img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
            dt: "2021-10-23"
        },
        {
            name: "Nishi",
            location: "India",
            score: 1250,
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
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
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt={value.name} />
                            <div className="info">
                                <h3 className="name text-dark">{value.name}</h3>
                                <span>{value.location}</span>
                            </div>
                        </div>
                        <div className="item">
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
            if (days == 0) return true;
            return previous <= userDate && today >= userDate;
        });

        return filtered.sort((a, b) => b.score - a.score);
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
            <li><Link to="/glossary" >Tracks</Link></li>
            <li><Link to="/glossary" >Login</Link></li>
            <li><Link to="/glossary" >Sign Up</Link></li>
          </ul>
        </nav>
      </div>
      </header>

            <section id="track">
                <div className="lb">
                <h1 className="leaderboard">Leaderboard</h1>
                <Profiles data={between(profiledb, period)} />
            </div>
          
      </section>
      
    
    </div>   
        // <div>
        //     <header className="navbar" style={navbarStyle}>
        //         <div className="container1">
        //             <div className="logo" style={logoStyle}>
        //                 <h1>{logoText}</h1>
        //             </div>
        //             <nav>
        //                 <ul>
        //                     <li><Link to="/" >Home</Link></li>
        //                     <li><Link to="/glossary" >Tracks</Link></li>
        //                     <li><Link to="/glossary" >Login</Link></li>
        //                     <li><Link to="/glossary" >Sign Up</Link></li>
        //                 </ul>
        //             </nav>
        //         </div>
        //     </header>

        //     <section id="board">
        //         <div className="lb">
        //        
        //         </div>
        //     </section>
        // </div>
    );
};

export default Leaderboard;