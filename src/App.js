import React, { useState } from "react";
import "./styles.css";
const articles = [
  { id: 1, title: "How to Decorate Your Living Room", content: "Discover the best ways to decorate your living room with modern furniture and stylish accessories." },
  { id: 2, title: "Top 10 Interior Design Tips", content: "Interior design can transform your home. Here are the top 10 tips to get started." },
  { id: 3, title: "Choosing the Right Color Palette", content: "Colors impact mood and style. Learn how to pick the perfect color scheme." },
];

const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? <mark key={index}>{part}</mark> : part
  );
};

export default function App() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Search Articles</h2>
      <input
        type="text"

        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box "
      />

      <div className="results">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <div key={article.id} className="article">
              <h3>{highlightText(article.title, search)}</h3>
              <p>{highlightText(article.content, search)}</p>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}