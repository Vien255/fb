import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCommnets } from "../../features/commentsSlice";
import { selectorComments } from "../../redux/selectors";
import { commertsService } from "../../service";
import { ListComments } from "./ListComments.jsx";
import "./style.scss";

export const Comments = ({ dataActicle }) => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const dataComments = useSelector(selectorComments);

  const [text, setText] = useState("");

  const formatDay = (createdAt) => {
    return moment(createdAt).format("MMMM DD, YYYY");
  };

  useEffect(() => {
    getDataComments();
  }, []);

  const getDataComments = () => {
    dispatch(getCommnets(slug));
  };

  const handleAddComment = async () => {
    await commertsService.postComment(dataActicle.slug, text);
    dispatch(getCommnets(slug));
    setText("");
  };

  return (
    <div className="comment">
      <h3>Comments</h3>
      <div className="ip">
        <TextArea
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="addComment">
        <div className="mainPosts">
          <div className="title">
            <div className="profile">
              <div
                className="globalRoundProfile"
                style={{
                  backgroundImage: `url(${dataActicle?.author?.image})`,
                }}
              ></div>

              <div className="name">
                <Link>{dataActicle?.author?.username}</Link>
                <span>{formatDay(dataActicle?.createdAt)}</span>
              </div>
            </div>

            <Button type="primary" onClick={handleAddComment}>
              Bình Luận
            </Button>
          </div>
        </div>
      </div>

      {dataComments.length > 0 && <ListComments dataComments={dataComments} />}
    </div>
  );
};
