import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best You tube chanal to learn Web Development</h3>
      <div className="play-video-info">
        <p>1524 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />2
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>Ducat</p>
          <span>1m Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Chanal That makes learning easy</p>
        <p>Subscribe Ducat to watch More Tutorial on web development</p>
        <hr />
        <h4>130 Comment</h4>
        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Arpit Singh <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              quas ad quis repellendus vel quo, voluptatum vero asperiores
              officia eum?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Arpit Singh <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              quas ad quis repellendus vel quo, voluptatum vero asperiores
              officia eum?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Arpit Singh <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              quas ad quis repellendus vel quo, voluptatum vero asperiores
              officia eum?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Arpit Singh <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              quas ad quis repellendus vel quo, voluptatum vero asperiores
              officia eum?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={jack} alt="" />
          <div>
            <h3>
              Arpit Singh <span>1 day ago</span>
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
              quas ad quis repellendus vel quo, voluptatum vero asperiores
              officia eum?
            </p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
