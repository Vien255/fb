import { Button } from "antd";
import moment from "moment";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { commertsService } from "../../../service";

export const ListComments = ({ dataComments }) => {
  const { slug } = useParams();
  const handleDeleteComment = async (id) => {
    await commertsService.deleteComment(slug, id);
    // window.location.reload()
  };
  console.log("1", dataComments);
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
                  <span>
                    {moment(comment?.createdAt).format("MMMM DD, YYYY")}
                    <i className="fas fa-globe-americas"></i>
                  </span>
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
