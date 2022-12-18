import { Button, Input, Modal } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { acticlesService } from "../../service";
import "../CectionSenter/style.scss";
import { Comments } from "../Comments";

export const DetailPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [dataActicle, setDataActicle] = useState([]);
  const [desc, setDesc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    await acticlesService.putActicle(slug, desc);
    setIsModalOpen(false);
    navigate("/");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getDataActicle();
  }, []);

  const getDataActicle = async () => {
    const response = await acticlesService.getActicle(slug);
    setDataActicle(response.data.article);
  };

  const handleDelete = async (slug) => {
    await acticlesService.deleteActicle(slug);
    navigate("/");
  };

  return (
    <div className="sectionCenter">
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
        </div>

        <div className="description">{dataActicle?.description}</div>
        <div className="likeShare">
          <Button type="primary" onClick={showModal}>
            Sửa
          </Button>
          <Button
            type="primary"
            danger
            onClick={() => handleDelete(dataActicle?.slug)}
          >
            Xóa
          </Button>
          <Modal
            title="Tạo Bài Viết"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Input
              name="description"
              placeholder="Enter description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Modal>
        </div>
      </div>
      <Comments dataActicle={dataActicle} />
    </div>
  );
};
