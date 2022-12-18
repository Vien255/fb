import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import { Link } from "react-router-dom";
import "./style.scss";

export const Comments = ({ dataActicle }) => {
  return (
    <div className="comment">
      <h3>Comments</h3>
      <div className="ip">
        <TextArea rows={4} />
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
            <Button type="primary">Bình Luận</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
