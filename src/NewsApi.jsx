import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Apistyle.css";
const url =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=82636c75191c412a82dfe98af55bb83c";
const NewsApi = () => {
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setNews(data.articles);
  };
  const removeNews = (title) => {
    const singleNews = news.filter(
      (myHeadlines) => myHeadlines.title !== title
    );
    setNews(singleNews);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          marginButton: "30px",
        }}
      >
        <h1>News</h1>
        <h2> Headlines :{news.length}</h2>
      </div>
      <main className="news">
        {news.map((myHeadlines) => {
          return (
            <div className="Headlines" key={myHeadlines.title}>
              <img src={myHeadlines.urlToImage} alt="screen info " />
              <h4>{myHeadlines.title.substring(0, 10)}...</h4>
              <p>{myHeadlines.description.substring(0, 50)}</p>
              <Link target={"_blank"} rel="noreferrer" to={myHeadlines.url}>
                Read More...
              </Link>

              {/* target={"_blank"}
              rel="noreferrer" */}
              <footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>{myHeadlines.author}</h4>
                <h5>{myHeadlines.publishedAt}</h5>
              </footer>
              <button
                onClick={() => {
                  removeNews(myHeadlines.title);
                }}
                className="removeBtn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default NewsApi;
