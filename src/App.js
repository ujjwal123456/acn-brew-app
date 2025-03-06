import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import ComingSoon from "./ComingSoon";
import SearchPage from "./SearchPage";
import AnonymousLogin from "./AnonymousLogin";
import { getApps, getApp ,initializeApp } from "firebase/app";

import "./App.css";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

const sections = [
  { title: "Pulse Check", key: "pulse" },
  { title: "Teams that are Making News", key: "teams" },
  { title: "People Corner", key: "people" },
];

const seedNewsData = async () => {
  const newsCollection = collection(db, "V1/news");
  const sampleNews = [
    {
      category_id: "1",
      is_active: true,
      news_comment_count: 10,
      news_created_by: "Admin",
      news_id: "news_001",
      news_image_url: "https://via.placeholder.com/150",
      news_like_count: 25,
      news_modified_by: "Admin",
      news_redirect_url: "https://example.com/news_001",
      news_search_keywords_array: ["news", "latest", "breaking"],
      news_short_desc: "Short description of the news article.",
      news_title: "Breaking News Headline",
      news_updated_date: new Date().toISOString(),
      published_date: new Date().toISOString(),
    },
    {
      category_id: "2",
      is_active: true,
      news_comment_count: 5,
      news_created_by: "Editor",
      news_id: "news_002",
      news_image_url: "https://via.placeholder.com/150",
      news_like_count: 15,
      news_modified_by: "Editor",
      news_redirect_url: "https://example.com/news_002",
      news_search_keywords_array: ["update", "tech", "trending"],
      news_short_desc: "Latest tech news update.",
      news_title: "Tech World Update",
      news_updated_date: new Date().toISOString(),
      published_date: new Date().toISOString(),
    },
  ];

  for (const news of sampleNews) {
    await addDoc(newsCollection, news);
  }
  console.log("Sample news data seeded successfully.");
};

const App = () => {
  const [openSections, setOpenSections] = useState({
    pulse: true,
    teams: false,
    people: false,
  });

  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      await seedNewsData(); // Call the function to seed data
      const querySnapshot = await getDocs(collection(db, "V1/news"));
      const newsData = querySnapshot.docs.map((doc) => doc.data());
      setNewsList(newsData);
    };
  
    fetchNews();
  }, []);
  

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
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
                      {newsList.map((news, index) => (
                        <Link to={`/coming-soon/${index}`} key={news.news_id} className="card-link">
                          <div className="card">
                            <img src={news.news_image_url} alt={news.news_title} className="card-image" />
                            <div className="card-content">
                              <p className="card-title">{news.news_title}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link to="/search" className="search-link">Go to Search</Link>
              <Link to="/anonymous-login" className="search-link">Anonymous Login</Link>
            </div>
          }
        />
        <Route path="/coming-soon/:id" element={<ComingSoon />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/anonymous-login" element={<AnonymousLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
