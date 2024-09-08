import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import './glossary.css';

const Glossary = () => {
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

  const threshold1 = 50;
  const currentColorSet = scrollPosition < threshold1 ? colorSet1 : colorSet2;

  const navbarStyle = {
    backgroundColor: currentColorSet.backgroundColor,
    boxShadow: scrollPosition > threshold1 ? '0 2px 10px rgba(0, 0, 0, 0.3)' : 'none',
    transition: 'background-color 0.5s ease',
  };

  const logoStyle = {
    transform: `scale(${Math.max(1 - scrollPosition / 500, 0.9)})`,
    color: currentColorSet.textColor, 
  };

  const linkStyle = {
    color: currentColorSet.textColor, 
  };

  const logoText = textModified ? '🏛️ Institutions and Constitution' : 'Institutions and Constitution';


    const terms = [
      { term: "Brticle 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Crticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Directive Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Article 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Erticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Directive Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Article 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Article 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Directive Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Article 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Frticle 21", definition: "Protection of life and personal liberty. The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Grticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Directive Principles", definition: "Guidelines for the government to promote social and economic welfare." },
      { term: "Article 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Hrticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Directive Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Hrticle 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Article 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Iirective Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Jrticle 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Krticle 21", definition: "Protection of life and personal liberty." },
      { term: "Lrticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Mirective Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Article 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Article 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Nirective Principles", definition: "Guidelines for the government to promote social and economic welfare." },
      { term: "Article 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Article 21", definition: "Protection of life and personal liberty." },
      { term: "Article 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Oirective Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Prticle 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Qrticle 21", definition: "Protection of life and personal liberty." },
      { term: "Rrticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Sirective Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Trticle 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Urticle 21", definition: "Protection of life and personal liberty." },
      { term: "Vrticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Wirective Principles", definition: "Guidelines for the government to promote social and economic welfare." }, 
      { term: "Xrticle 32", definition: "The right to constitutional remedies for enforcement of fundamental rights." },
      { term: "Yrticle 21", definition: "Protection of life and personal liberty." },
      { term: "Zrticle 14", definition: "Equality before the law and equal protection of laws." },
      { term: "Directive Principles", definition: "Guidelines for the government to promote social and economic welfare." },
    ];
    const groupTermsByInitial = (terms) => {
      const grouped = terms.reduce((acc, term) => {
        const initial = term.term[0].toUpperCase();
        if (!acc[initial]) {
          acc[initial] = [];
        }
        acc[initial].push(term);
        return acc;
      }, {});
  
      return Object.keys(grouped).sort().map(key => ({
        initial: key,
        terms: grouped[key],
      }));
    };
  
    const groupedTerms = groupTermsByInitial(terms);

    const sectionRefs = useRef(groupedTerms.reduce((acc, group) => {
      acc[group.initial] = React.createRef();
      return acc;
    }, {}));
  
  
    const handleLetterClick = (letter) => {
      setSelectedLetter(letter);
      if (sectionRefs.current[letter]) {
        sectionRefs.current[letter].current.scrollIntoView({ behavior: 'smooth'});
      }
    };
  
  return (
    <div>
      <header className="navbar" style={navbarStyle}>
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
      </header>
      
      <div>
      <section id="home">
          <h1>GLOSSARY</h1>
          <div className="letters">
          {groupedTerms.map((group) => (
            <button
              key={group.initial} className='letter-button'
              onClick={() => handleLetterClick(group.initial)}
              style={{ fontWeight: selectedLetter === group.initial ? 'bold' : 'normal' }}>
              {group.initial}
            </button>
          ))}
        </div>
      </section>
    </div>
      
    <div className="glossary-list">
        {groupedTerms.map((group, index) => (
          <div key={index} className="glossary-group" ref={sectionRefs.current[group.initial]}>
            <h2>{group.initial}</h2>
            {group.terms.map((item, idx) => (
              <div key={idx} className="glossary-item">
                <h3>{item.term}</h3>
                <p>{item.definition}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>      
  );
};

export default Glossary;

