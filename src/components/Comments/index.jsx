import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { commertsService } from "../../service";
import { ListComments } from "./ListComments.jsx";
import "./style.scss";

export const Comments = ({ dataActicle }) => {
  const { slug } = useParams();
  const [text, setText] = useState("");
  const [dataComments, setDataComments] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getDataComments();
  }, [setDataComments, load]);

  const getDataComments = async () => {
    const response = await commertsService.getComments(slug);
    setDataComments(response.data.comments);
  };

  const handleAddComment = async () => {
    await commertsService.postComment(dataActicle.slug, text);
    setLoad(!load);
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
                <span>
                  {moment(dataActicle?.createdAt).format("MMMM DD, YYYY")}
                  <i className="fas fa-globe-americas"></i>
                </span>
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
