import { useSelector } from "react-redux";
import { selectorActicles, selectorInfoUser } from "../../redux/selectors";
import { ListArticles } from "./ListArticles";
import "./style.scss";

export const DetailUser = () => {
  const info = useSelector(selectorInfoUser);
  const acticles = useSelector(selectorActicles);

  return (
    <div className="userDetail">
      <div className="userPosts">
        <div className="usertitle">
          <div className="profile">
            <div
              className="avt"
              style={{
                backgroundImage: `url(${info.image})`,
              }}
            ></div>
            <h2>{info.username}</h2>
          </div>
        </div>
      </div>
      {acticles.length > 0 && <ListArticles acticles={acticles} />}
    </div>
  );
};
