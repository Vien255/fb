import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import fbNameLogo from "../../assets/fbNameLogo.png";
import { authenService } from "../../service";
import "./style.scss";

const schema = yup
  .object({
    username: yup.string().required(),
    email: yup
      .string()
      .required()
      .matches(`[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]`, "email must match"),
    password: yup.string().required(),
  })
  .required();

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      <div className="registerCard">
        <div className="card">
          <span className="title">Đăng Ký</span>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter User Name"
                  status={errors.username && "error"}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter email"
                  status={errors.email && "error"}
                />
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
                  status={errors.password && "error"}
                />
              )}
            />
            <button className="login-btn" type="submit">
              Đăng Ký
            </button>
          </Form>
          <div className="hr"></div>
          <Link to="/login">
            <div className="register-rgt">Đăng Nhập</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
