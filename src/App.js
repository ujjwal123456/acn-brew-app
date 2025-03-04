import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import "./App.css";

const sections = [
  { title: "Pulse Check", key: "pulse" },
  { title: "Teams that are Making News", key: "teams" },
  { title: "People Corner", key: "people" },
];

const cards = [
  {
    title: "SUSTAINABILITY",
    image: "https://www.enrichwise.com/wp-content/uploads/2023/04/1680938968Sustainabledevelopment.jpeg",
  },
  {
    title: "Initiatives Leads",
    image: "https://th.bing.com/th/id/OIP.SV-xoG8hCrdXbP0qxeDgYQHaEl?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    title: "LANGUAGE DAY",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0z5kQdUzH84IzzzyixxXO2H9nNdvIaWNIqg&s",
  },
];

const Home = () => {
  const [openSections, setOpenSections] = useState({
    pulse: true,
    teams: false,
    people: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="app-container">
      <div className="banner">
        <h2>
          Welcome to <span className="highlight">The BREW App</span>
        </h2>
        <p>Please take the time to explore and share your feedback.</p>
      </div>

      {sections.map(({ title, key }) => (
        <div className="section" key={key}>
          <div
            className="section-header"
            onClick={() => toggleSection(key)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleSection(key)}
          >
            <span>{title}</span>
            <span>{openSections[key] ? "▼" : "▶"}</span>
          </div>

          {openSections[key] && (
            <div className="cards-container">
              {cards.map((card, index) => (
                <Link to={`/coming-soon/${index}`} key={index} className="card-link">
                  <div className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <div className="card-content">
                      <p className="card-title">{card.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon/:id" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
};

export default App;
