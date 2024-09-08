import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import Footer from './Footer.jsx';
import RouteMap from './RouteMap.jsx';


const Home = () => {

    //  const [scrollPosition, setScrollPosition] = useState(0);
    //  const [textModified, setTextModified] = useState(false);
    //  const [selectedLetter, setSelectedLetter] = useState('');
  
    //  useEffect(() => {
    //    const handleScroll = () => {
    //      const newScrollPosition = window.scrollY;
    //      setScrollPosition(newScrollPosition);
    //      setTextModified(newScrollPosition > 100); 
    //    };
  
    //    window.addEventListener('scroll', handleScroll);
    //    return () => {
    //      window.removeEventListener('scroll', handleScroll);
    //    };
    //  }, []);
  
    //  const colorSet2 = {
    //    backgroundColor: '#1E3E49', 
    //    textColor: '#FFF' 
    //  };
  
    //  const colorSet1 = {
    //    backgroundColor: '#183151',
    //    textColor: '#FFF'
    //  };
  
    //  const threshold1 = 50;
    //  const currentColorSet = scrollPosition < threshold1 ? colorSet1 : colorSet2;
  
    //  const navbarStyle = {
    //    backgroundColor: currentColorSet.backgroundColor,
    //    boxShadow: scrollPosition > threshold1 ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
    //    transition: 'background-color 0.5s ease',
    //  };
  
    //  const logoStyle = {
    //    transform: `scale(${Math.max(1 - scrollPosition / 500, 0.9)})`,
    //    color: currentColorSet.textColor, 
    //  };
  
    //  const linkStyle = {
    //    color: currentColorSet.textColor, 
    //  };
  
    //  const logoText = textModified ? '🏛️ Institutions and Constitution' : 'Institutions and Constitution';


   


   return (
    <div>

     {/* <header className="navbar" style={navbarStyle}>
       <div className="container">
         <div className="logo" style={logoStyle}>
           <h1>{logoText}</h1>
         </div>
         <nav>
           <ul>
             <li><Link to="/" style={linkStyle}>Home</Link></li>
             <li><Link to="/glossary" style={linkStyle}>Tracks</Link></li>
             <li><Link to="/glossary" style={linkStyle}>Login</Link></li>
             <li><Link to="/glossary" style={linkStyle}>Sign Up</Link></li>
           </ul>
         </nav>
       </div>
       </header> */}


       {/* <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <nav>
        <ul>
          <li><Link to="/glossary">Go to Glossary Page</Link></li>
        </ul>
      </nav>  */}


        <div className='Page'>
            

            <div className="game-container">   
                <main className="game-main">
                    {/* <h2 className="game-title">The <span>DRAGON's</span> DUNGEON</h2> */}
                    <h2 className="game-title">Institutions and Constitution</h2>
                    <div className="game-options">
                    <button className="game-button">Enter Portal</button>
                    </div>
                </main>

        {/* <div className="fire-animation"></div> */}


   
            </div>

            <div className='section-2'>
                <div className='about'>
                    <div className='about-head'>ABOUT US</div>
                    <div className='about-content'>At Institutions and Constitutions, we believe that understanding the Constitution should be easy, accessible, and engaging for everyone. Our platform simplifies complex constitutional concepts through AI-powered articles, breaking them down into bite-sized, easy-to-read content. We also bring learning to life with innovative games that allow users to interact and test their knowledge in a fun and dynamic way.

                        Whether you're a student, a legal enthusiast, or just someone curious about the Constitution, we make learning informative, enjoyable, and tailored to your pace. Join us and embark on a journey to explore the foundation of our nation's laws—made simple, engaging, and interactive!</div>

                </div>

                <RouteMap/>               
                
            

            <div className='timeline-contain'>
                <div className='timeline-heading'>Timeline of Major Events</div>
                <div class="container-fluid my-4">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="main-timeline">
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fa fa-globe"></i>
                                        </div>
                                        <h3 class="title">First Amendment Act, 1951</h3>
                                        <p class="description">
                                        Addressed limitations on freedom of speech and expression, empowering the state to impose reasonable restrictions for the sake of public order, morality, and national security.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fa fa-globe"></i>
                                        </div>
                                        <h3 class="title">Twenty-Fifth Amendment Act, 1971</h3>
                                        <p class="description">
                                        Curtained the right to property as a Fundamental Right. Empowered the state to take control of private property for public use, thus reducing judicial intervention in economic policies like land reforms.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fa fa-globe"></i>
                                        </div>
                                        <h3 class="title">Forty-Second Amendment Act, 1976</h3>
                                        <p class="description">
                                        Known as the "mini-Constitution," this amendment made sweeping changes during the Emergency period under Indira Gandhi.
                                        </p>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fa fa-globe"></i>
                                        </div>
                                        <h3 class="title">Seventy-Third Amendment Act, 1992</h3>
                                        <p class="description">
                                        Strengthened local governance by introducing Panchayati Raj institutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>

            <div className='footer'>
                <Footer/>
            </div>

            
            
        </div>

        

    



    </div>

  );
}
export default Home;