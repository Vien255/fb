import { Button } from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getActicles } from "../../../features/acticlesSlice";
import { selectorInfoUser } from "../../../redux/selectors";
import { acticlesService } from "../../../service";

export const ListArticles = ({ acticles }) => {
  const dispatch = useDispatch();
  const myUser = useSelector(selectorInfoUser);

  const myArticle = acticles.filter((article) => {
    return article.author.username === myUser.username;
  });

  const formatDay = (createdAt) => {
    return moment(createdAt).format("MMMM DD, YYYY");
  };

  const handleDeleteComment = async (slug) => {
    await acticlesService.deleteActicle(slug);
    dispatch(getActicles());
  };

  return (
    <>
      <h3>List Article</h3>
      {myArticle?.map((item, index) => (
        <div className="addComment" style={{ paddingTop: "20px" }} key={index}>
          <div className="mainPosts">
            <div className="title">
              <div className="profile">
                <div
                  className="globalRoundProfile"
                  style={{
                    backgroundImage: `url(${item?.author?.image})`,
                  }}
                ></div>

                <div className="name">
                  <Link>{item?.author?.username}</Link>
                  <span>{formatDay(item?.createdAt)}</span>
                  <div>{item.body}</div>
                </div>
              </div>

              <Button
                type="primary"
                onClick={() => handleDeleteComment(item.slug)}
              >
                Xóa
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
