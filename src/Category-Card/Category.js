import { useState } from "react";
import "./Category.css";
import Card from "../Card/Card";

const sections = [
  { title: "Pulse Check", key: "pulse", catergoryId: 1 },
  { title: "Teams that are Making News", key: "teams", catergoryId: 2 },
  { title: "People Corner", key: "people", catergoryId: 3 },
  { title: "People Health Corner", key: "health", catergoryId: 4 },
];

const Category = () => {
  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  const [openSections, setOpenSections] = useState({
    pulse: true,
    teams: false,
    people: false,
    health: false,
  });
  return (
    <>
      {sections.map(({ title, key, catergoryId }) => (
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
          <div>
            <Card id={catergoryId} data={openSections} ele={key}/>
          </div>
          
        </div>
      ))}
    </>
  );
};
export default Category;
