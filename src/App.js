import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ComingSoon from "./Coming-Soon/ComingSoon";
import SearchPage from "./Search-Page/SearchPage";
import AnonymousLogin from "./AnonymousLogin";
import "./App.css";
import Category from "./Category-Card/Category";
import { fetchNews, NewsContext } from "./util";

const App = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((output) => setNewsList(output))
      .catch((error) => console.log(error.message));
  }, []);

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
              <div>
                <NewsContext.Provider value={newsList}>
                  <Category />
                </NewsContext.Provider>
              </div>
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
