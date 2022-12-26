import moment from "moment";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { commertsService } from "../../../service";
import { getCommnets } from "../../../features/commentsSlice";

export const ListComments = ({ dataComments }) => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  const handleDeleteComment = async (id) => {
    await commertsService.deleteComment(slug, id);
    dispatch(getCommnets(slug));
  };

  const formatDay = (createdAt) => {
    return moment(createdAt).format("MMMM DD, YYYY");
  };

  return (
    <>
      <h3>List Commnets</h3>
      {dataComments?.map((comment, index) => (
        <div className="addComment" style={{ paddingTop: "20px" }} key={index}>
          <div className="mainPosts">
            <div className="title">
              <div className="profile">
                <div
                  className="globalRoundProfile"
                  style={{
                    backgroundImage: `url(${comment?.author?.image})`,
                  }}
                ></div>

                <div className="name">
                  <Link>{comment?.author?.username}</Link>
                  <span>{formatDay(comment?.createdAt)}</span>
                  <div>{comment.body}</div>
                </div>
              </div>

              <Button
                type="primary"
                onClick={() => handleDeleteComment(comment.id)}
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
