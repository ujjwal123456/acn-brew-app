import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

const ComingSoon = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-container">
      <h2 className="details-text">Coming Soon</h2>
      <p>Page ID: {id}</p>
      <button className="back-button" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default ComingSoon;
