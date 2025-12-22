import React from "react";
import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment/moment";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const videoList_url = `https://www.googleapis.com/youtube/v3/videos
?part=snippet,contentDetails,statistics
&chart=mostPopular
&regionCode=US
&videoCategoryId=${category}
&maxResults=50
&key=${API_KEY}`;

      const response = await fetch(videoList_url);
      const data = await response.json();
      setData(data.items);
    } catch (error) {
      console.error("Error fetching YouTube data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryID}/${item.id}`}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {item.statistics.viewCount} views &bull;{" "}
              {moment(item.snippet.publishedAt).fromNow()}
            </p>
          </Link>
        );
      })}

      {/*
        <div className="card">
          <img src={thumbnail2} alt="" />
          <h2>
            Best Chanal to learn coding that help you to be a web developer
          </h2>
          <h3>Ducat</h3>
          <p>20k views &bull; 2 days ago </p>
        </div>
        
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail1} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail2} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail3} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail4} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail5} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail6} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail7} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div>
      <div className="card">
        <img src={thumbnail8} alt="" />
        <h2>Best Chanal to learn coding that help you to be a web developer</h2>
        <h3>Ducat</h3>
        <p>20k views &bull; 2 days ago </p>
      </div> */}
    </div>
  );
};

export default Feed;
