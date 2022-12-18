import { Button, Form, Input } from "antd";
import "./style.scss";
import fbNameLogo from "../../assets/fbNameLogo.png";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { authenService } from "../../service";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = async (data) => {
    await authenService.register(data);
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="logo">
        <img src={fbNameLogo} alt="name logo" />
        <h3>
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </h3>
      </div>
      <div className="loginCard">
        <div className="card">
          <span className="title">Đăng Ký</span>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <Input {...field} placeholder="Enter User Name" />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input {...field} placeholder="Enter email" />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter Password"
                />
              )}
            />
            <button className="button" type="submit">
              Đăng Ký
            </button>
          </Form>
          <div className="hr"></div>
          <Link to="/login">
            <div className="rgt">Đăng Nhập</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
