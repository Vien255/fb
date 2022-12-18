import { useEffect, useState } from "react";
import { acticlesService } from "../../../service/index.js";

import moment from "moment/moment.js";
import { Link } from "react-router-dom";
import { care, comment, heart, like, like_light, share } from "../../../assets";
import "../style.scss";

export const MainPost = () => {
  const [dataActicles, setDataActicles] = useState([]);

  useEffect(() => {
    getDataActicles();
  }, []);

  const getDataActicles = async () => {
    const response = await acticlesService.getActicles();
    setDataActicles(response.data.articles);
  };
  console.log(dataActicles);

  return (
    <>
      {dataActicles.map((acticle, index) => (
        <div className="mainPosts" key={index}>
          <div className="title">
            <div className="profile">
              <div
                className="globalRoundProfile"
                style={{ backgroundImage: `url(${acticle.author.image})` }}
              ></div>

              <div className="name">
                <Link>{acticle.author.username}</Link>
                <span>
                  {moment(acticle.createdAt).format("MMMM DD, YYYY")}
                  <i className="fas fa-globe-americas"></i>
                </span>
              </div>
            </div>
          </div>

          <Link to={`/detail/${acticle.slug}`}>
            <div className="description">{acticle.description}</div>
          </Link>

          <div className="reaction">
            <div className="icons">
              <div className="svg">
                <img src={like} alt="" />
              </div>
              <div className="svg">
                <img src={heart} alt="" />
              </div>
              <div className="svg">
                <img src={care} alt="" />
              </div>
              <Link>{acticle.favoritesCount}</Link>
            </div>
          </div>

          <div className="likeShare">
            <span>
              <div className="svg">
                <img src={like_light} alt="" />
              </div>
              <h3>Like</h3>
            </span>
            <span>
              <div className="svg">
                <img src={comment} alt="" />
              </div>
              <h3>Comment</h3>
            </span>
            <span>
              <div className="svg">
                <img src={share} alt="" />
              </div>
              <h3>Share</h3>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
