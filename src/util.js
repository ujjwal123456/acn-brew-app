import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { createContext } from "react";

const seedNewsData = async () => {
  const newsCollection = collection(db, "acn-brew-app", "V1", "news");
  const sampleNews = [
    {
      category_id: 1,
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
      category_id: 2,
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
    {
      category_id: 3,
      is_active: true,
      news_comment_count: 5,
      news_created_by: "Editor",
      news_id: "news_003",
      news_image_url: "https://via.placeholder.com/150",
      news_like_count: 15,
      news_modified_by: "Editor",
      news_redirect_url: "https://example.com/news_003",
      news_search_keywords_array: ["update", "sports", "trending"],
      news_short_desc: "Latest sports news update.",
      news_title: "Sports Update",
      news_updated_date: new Date().toISOString(),
      published_date: new Date().toISOString(),
    },
    {
      category_id: 4,
      is_active: true,
      news_comment_count: 10,
      news_created_by: "Admin",
      news_id: "news_004",
      news_image_url: "https://via.placeholder.com/150",
      news_like_count: 25,
      news_modified_by: "Admin",
      news_redirect_url: "https://example.com/news_004",
      news_search_keywords_array: ["news", "latest", "health"],
      news_short_desc: "Short description of the news article.",
      news_title: "Health Check-up",
      news_updated_date: new Date().toISOString(),
      published_date: new Date().toISOString(),
    },
  ];

  sampleNews.forEach(async (news) => {
    await addDoc(newsCollection, news);
  });
  console.log("Sample news data seeded successfully.");
};

export const fetchNews = async () => {
//   await seedNewsData();  //To seed data in firebase
  const querySnapshot = await getDocs(
    collection(db, "acn-brew-app", "V1", "news")
  );
  const newsData = querySnapshot.docs.map((doc) => doc.data());

  return newsData;
};

export const NewsContext = createContext();
