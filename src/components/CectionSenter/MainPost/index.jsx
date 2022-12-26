import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment/moment.js";
import { Link } from "react-router-dom";
import { care, comment, heart, like, share } from "../../../assets";
import "../style.scss";
import { getActicles } from "../../../features/acticlesSlice.js";
import { selectorActicles } from "../../../redux/selectors.js";
import { favoritesService } from "../../../service";
import { LikeOutlined } from "@ant-design/icons";

export const MainPost = () => {
  const dispatch = useDispatch();
  const dataActicles = useSelector(selectorActicles);

  const formatDay = (createdAt) => {
    return moment(createdAt).format("MMMM DD, YYYY");
  };

  useEffect(() => {
    getDataActicles();
  }, []);

  const getDataActicles = () => {
    dispatch(getActicles());
  };

  const handleLike = async (acticle) => {
    const IdSlug = acticle.slug;
    const favorited = acticle.favorited;

    favorited
      ? await favoritesService.deleteFavorite(IdSlug)
      : await favoritesService.postFavorite(IdSlug);

    dispatch(getActicles());
  };

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
                <span>{formatDay(acticle.createdAt)}</span>
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
            <span onClick={() => handleLike(acticle)}>
              <div
                className="svg"
                style={{ color: acticle.favorited && "blue" }}
              >
                <LikeOutlined />
              </div>
              <h3>Like</h3>
            </span>
            <span>
              <div className="svg">
                <img src={comment} alt="" />
              </div>
              <Link to={`/detail/${acticle.slug}`}>
                <h3>Comment</h3>
              </Link>
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
