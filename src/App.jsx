import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [spaceNews, setSpaceNews] = useState([]);
  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((res) => res.json())
      .then((data) => {
        setSpaceNews(data);
        console.log(data);
      })
      .catch(() => {
        console.error("Error fetching articles");
      });
  }, []);

  return (
    <div className="App">
      <div className="title">
        <h1>space news</h1>
      </div>
      <div className="content">
        {spaceNews.map((News) => {
          return (
            <div className="news" key={News.id}>
              <a href={News.url}>{News.title}</a>
              <img src={News.imageUrl} />
              <p>{News.summary}</p>
              <p>{News.publishedAt}</p>
              <p>{News.updatedAt}</p>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
