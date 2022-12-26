import { Avatar, Button, Card, Form, Input, Modal, Switch } from "antd";
import Meta from "antd/es/card/Meta";
import moment from "moment";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectorInfoUser } from "../../redux/selectors";
import { acticlesService } from "../../service";
import "../CectionSenter/style.scss";
import { Comments } from "../Comments";

export const DetailPost = () => {
  const navigate = useNavigate();
  const ifUser = useSelector(selectorInfoUser);
  const { slug } = useParams();
  const [dataActicle, setDataActicle] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const isUser = ifUser.username === dataActicle?.author?.username;

  const formatDay = (createdAt) => {
    return moment(createdAt).format("MMMM DD, YYYY");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async () => {
    setIsModalOpen(false);
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
    setTimeout(() => {
      setDataActicle(response.data.article);
    }, 2000);
  };

  const handleDelete = async (slug) => {
    await acticlesService.deleteActicle(slug);
    navigate("/");
  };

  const { handleSubmit, control, reset } = useForm({});

  const onSubmit = async (post) => {
    await acticlesService.putActicle(slug, post);
    reset([]);
    setIsModalOpen(false);
    navigate("/");
  };

  console.log(dataActicle);

  return (
    <div className="sectionCenter">
      {dataActicle.tagList ? (
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
          </div>

          <div className="description">{dataActicle?.description}</div>
          {isUser ? (
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
                title="Sửa Bài Viết"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Form onFinish={handleSubmit(onSubmit)}>
                  <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                      <Input {...field} placeholder="Title" />
                    )}
                  />
                  <Controller
                    control={control}
                    name="description"
                    render={({ field }) => (
                      <Input {...field} placeholder="Description" />
                    )}
                  />
                  <Controller
                    control={control}
                    name="body"
                    render={({ field }) => (
                      <Input {...field} placeholder="Write your article" />
                    )}
                  />
                  <button type="submit">Sửa Bài</button>
                </Form>
              </Modal>
            </div>
          ) : (
            <div className="likeShare">
              <Button type="primary" onClick={showModal}>
                Theo dõi
              </Button>
            </div>
          )}
        </div>
      ) : (
        <Card
          style={{
            width: 700,
            marginTop: 16,
          }}
          loading={loading}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      )}

      {dataActicle.tagList && <Comments dataActicle={dataActicle} />}
    </div>
  );
};
