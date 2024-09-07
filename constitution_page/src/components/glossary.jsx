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


    const terms = [
      { term: "Legislature", link:"https://indiankanoon.org/doc/1199182/", definition: "The branch of government responsible for making, amending, or upholding laws" },
      { term: "Discrimination", link:"https://www.constitutionofindia.net/articles/article-15-prohibition-of-discrimination-on-grounds-of-religion-race-caste-sex-or-place-of-birth/#:~:text=Article%2015%2C%20Constitution%20of%20India,birth%20or%20any%20of%20them.", definition: "treating individuals differently based on their caste, race, gender, religion, appearance, sexual orientation" },
      { term: "Dominion", link:"https://en.wikipedia.org/wiki/Dominion_of_India#:~:text=The%20following%20day%2C%2015%20August,as%20its%20first%20Governor%20General.",definition: "status that India held after gaining independence from British rule but before becoming a full republic" },
      { term: "Directive Principles", link:"https://knowindia.india.gov.in/profile/directive-principles-of-state-policy.php#:~:text=Directive%20Principle%20of%20State%20Policy&text=These%20lay%20down%20that%20the,all%20institutions%20of%20national%20life.",definition: "Guidelines for the government to promote social and economic welfare" }, 
      { term: "Prohibition", link:"https://www.drishtiias.com/daily-news-analysis/prohibition-laws-and-issues#:~:text=Article%2047%3A%20The%20Directive%20Principle,which%20are%20injurious%20to%20health”.",definition: "act or practice of forbidding something by law" },
      { term: "Untouchability", link:"https://en.wikipedia.org/wiki/Untouchability",definition: "social practice of excluding certain groups or communities considered impure or lower within the caste hierarchy" },
      { term: "Attorney General", link:"https://en.wikipedia.org/wiki/Attorney-General_for_India#:~:text=The%20Attorney%20General%20for%20India,the%20pleasure%20of%20the%20President.",definition: "The highest law officer of the country who advises the Government on legal matters" },
      { term: "Arbitration", link:"",definition: "A method of resolving disputes outside of courts where parties submit their disputes to an arbitrator, whose decision is binding." },
      { term: "Suffrage", link:"https://indiankanoon.org/doc/1620503/",definition: "The right to vote in political elections" },
      { term: "Traffic",link:"https://indiankanoon.org/doc/1071750/", definition: "the illegal trade of humans or goods. Article 23 of the Indian Constitution prohibits human trafficking and forced labor, making it a punishable offense" },
      { term: "Advisory Board",link:"https://doj.gov.in/advisory-council/", definition: "A body constituted under certain laws to provide non-binding advice to government authorities" }, 
      { term: "Conviction",link:"https://indiankanoon.org/doc/655638/#:~:text=(1)No%20person%20shall%20be,2)No%20person%20shall%20be", definition: "The legal declaration that someone is guilty of a criminal offense following a trial or legal proceedings" },
      { term: "Detention",link:"https://indiankanoon.org/doc/581566/", definition: "The act of holding a person in custody, typically without trial, to prevent them from committing future offenses" },
      { term: "Secular", link:"https://en.wikipedia.org/wiki/Secularism_in_India",definition: "A principle under the Preamble of the Indian Constitution ensuring that the State does not favor any religion and that all religions are treated equally" },
      { term: "Acquisition",link:"https://indiankanoon.org/doc/7832/", definition: "Refers to the process by which the government takes ownership of private property for public use, usually with compensation" },
      { term: "Minority", link:"https://www.drishtiias.com/daily-updates/daily-news-analysis/minority-status-in-india",definition: "Refers to groups of people differentiated by religion, language, or ethnicity that are smaller in number compared to the majority." },
      { term: "Warrant", link:"https://sjcolegal.com/warrant/",definition: "A legal document issued by a competent authority that authorizes the police to perform a specific action, such as making an arrest or conducting a search" },
      { term: "Amalgamation",link:"https://unacademy.com/content/upsc/study-material/commerce/amalgamation-of-companies/", definition: "The merger of two or more entities, such as businesses or territories" },
      { term: "forfeiture",link:"", definition: "The loss of property or rights due to legal violations or non-compliance" }, 
      { term: "panchayats", link:"https://www.constitutionofindia.net/parts/part-ix/",definition: " Local self-government institutions in rural areas" },
      { term: "injustice",link:"", definition: "The violation of the rights of individuals or a failure to provide fair treatment under the law" },
      { term: "Exploitation", link:"https://www.nextias.com/blog/right-against-exploitation/",definition: "unethical use of individuals for the benefit of another through coercion, manipulation, or abuse of power. Artcile 23 and 24 of the Constitution are focused on rights against exploitation" },
      { term: "spoliation", link:"",definition: "act of damaging, altering, or destroying a monument, place, or object of national importance or damage to evidence during legal proceedings" }, 
      { term: "Council of Ministers",link:"https://en.wikipedia.org/wiki/Union_Council_of_Ministers", definition: "A body that advises the President, headed by the Prime Minister" },
      { term: "Cognizable Offense",link:"https://en.wikipedia.org/wiki/Cognisable_offence", definition: "Crimes where police can arrest without a warrant" },
      { term: "Extradition", link:"https://en.wikipedia.org/wiki/Extradition",definition: "Legal process where one country hands over a fugitive to another" },
      { term: "Federalism",link:"https://en.wikipedia.org/wiki/Federalism_in_India", definition: "Division of powers between the Union and State governments" }, 
      { term: "Fraternity", link:"https://www.drishtiias.com/daily-updates/daily-news-analysis/fraternity-in-india",definition: "A concept mentioned in the Preamble promoting unity and brotherhood" },
      { term: "Veto", link:"https://en.wikipedia.org/wiki/Veto#:~:text=India%3A%20The%20president%20has%20three,overridden%20by%20a%20simple%20majority.",definition: "The President’s power to withhold assent to a bill" },
      { term: "Writ",link:"https://indiankanoon.org/doc/981147/", definition: "A formal order issued by a higher court to ensure enforcement of Fundamental Rights" },
      { term: "Welfare State",link:"https://en.wikipedia.org/wiki/Welfare_state", definition: "A concept where the state plays a key role in the protection and promotion of the economic and social well-being of citizens" },
      { term: "Xenophobia", link:"https://en.wikipedia.org/wiki/Xenophobia",definition: "the Fundamental Rights prohibit discrimination based on race or place of birth" },
      { term: "Year of Commencement",link:"",definition: "The Constitution of India came into effect on January 26, 1950" },
      { term: "Habeas Corpus", link:"https://en.wikipedia.org/wiki/Habeas_corpus",definition: "A writ to secure an individual's liberty against unlawful detention" },
      { term: "Mandamus", link:"https://en.wikipedia.org/wiki/Mandamus",definition: "A writ directing a public official to perform a duty" }, 
      { term: "Certiorari",link:"https://en.wikipedia.org/wiki/Certiorari#:~:text=In%20law%2C%20certiorari%20is%20a,the%20superior%20court%20for%20review.", definition: "issued by a higher court to a lower court or tribunal, either to quash its decision or to transfer the case to the higher court for review" },
      { term: "Quo Warranto",link:"https://en.wikipedia.org/wiki/Quo_warranto", definition: "writ used to question the legal authority of a person holding a public office" },
      { term: "Zero Hour ",link:"https://byjus.com/free-ias-prep/zero-hour/", definition: " The time immediately following the Question Hour in Parliament, where members raise urgent matters without prior notice" },
      // { term: "", link:"",definition: "" }, 
      // { term: "",link:"", definition: "" },
      // { term: "U",link:"", definition: "" },
      // { term: "V",link:"", definition: "" },
      // { term: "W", link:"",definition: "" }, 
      // { term: "Xrticle 32",link:"", definition: "" },
      // { term: "Y", link:"",definition: "" },
      // { term: "Z", link:"",definition: "" },
      // { term: "D", link:"", definition: "" },
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
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/glossary" >Tracks</Link></li>
            <li><Link to="/glossary" >Login</Link></li>
            <li><Link to="/glossary" >Sign Up</Link></li>
          </ul>
        </nav>
      </div>
      </header>

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
      
    <div className="glossary-list">
        {groupedTerms.map((group, index) => (
          <div key={index} className="glossary-group" ref={sectionRefs.current[group.initial]}>
            <h2>{group.initial}</h2>
            {group.terms.map((item, idx) => (
              <div key={idx} className="glossary-item">
                <h3><Link to={item.link} className="articlelink">{item.term}</Link></h3>
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

