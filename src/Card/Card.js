import { useContext } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../util";
import "./Card.css";

const Card = (props) => {
  const newsList = useContext(NewsContext);

  return (
    <>
      {props.data[props.ele] && (
        <div className="cards-container">
          {newsList.map((news, index) => (
            <Link
              to={`/coming-soon/${index}`}
              key={news.news_id}
              className="card-link"
            >
              {news.category_id === props.id ? (
                <div className="card">
                  <img
                    src={news.news_image_url}
                    alt={news.news_title}
                    className="card-image"
                  />
                  <div className="card-content">
                    <p className="card-title">{news.news_title}</p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
