import React, { useState } from "react";
import "./SearchPage.css";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";



const images = [
  {
    title: "Pet-acular Moments",
    image: "https://www.enrichwise.com/wp-content/uploads/2023/04/1680938968Sustainabledevelopment.jpeg",
  },
  {
    title: "NorgesGruppen",
    image: "https://th.bing.com/th/id/OIP.SV-xoG8hCrdXbP0qxeDgYQHaEl?w=284&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    title: "SUSTAINABILITY Update 2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0z5kQdUzH84IzzzyixxXO2H9nNdvIaWNIqg&s",
  },
  {
    title: "NEW Initiative Leads",
    image: "https://cdn.prod.website-files.com/62df8ee55b11fa47a6dc0d78/64359406a4340a4fc5cdbee3_This%20Ones%20for%20Earth%20Tips%20for%20Sustainable%20Habits.%20(2880%20%C3%97%20920%20px).webp",
  },
];
const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const filteredImages = images.filter((image) =>
      image.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        <div className="search-page">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Brew from around the Accenture
          </motion.p>
          
          <div className="search-box">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="search-icon" />
          </div>
    
          {filteredImages.length > 0 ? (
            <div className="image-list">
              {filteredImages.map((image, index) => (
                <div key={index} className="image-card-container">
                  <motion.div
                    className="image-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img src={image.image} alt={image.title} />
                    <div className="overlay">{image.title}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="no-results" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No results found
            </motion.div>
          )}
        </div>
      );
    };
    
    export default SearchPage;
    