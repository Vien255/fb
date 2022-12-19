import { Form, Input, Modal } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { live, photo, smile } from "../../../assets";
import { acticlesService } from "../../../service";
import "../style.scss";

export const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const infos = useSelector((state) => state.infoUsers.info);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (post) => {
    await acticlesService.postActicle();
    setIsModalOpen(false);
  };

  return (
    <div className="createPost">
      <div className="input">
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${infos.image})` }}
        >
          <span></span>
        </div>
        <div className="post" onClick={showModal}>
          {infos.username} ơi, Bạn đang nghĩ gì?
        </div>
        <Modal
          title="Tạo Bài Viết"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form onFinish={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="title"
              render={({ field }) => <Input {...field} placeholder="Title" />}
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
            <button type="submit">Đăng Bài</button>
          </Form>
        </Modal>
      </div>

      <div className="buttons">
        <span>
          <div className="svg">
            <img src={live} alt="" />
          </div>
          <h4>Live Video</h4>
        </span>
        <span>
          <div className="svg">
            <img src={photo} alt="" />
          </div>
          <h4>Photo/Video</h4>
        </span>
        <span>
          <div className="svg">
            <img src={smile} alt="" />
          </div>
          <h4>Feeling/Activity</h4>
        </span>
      </div>
    </div>
  );
};
