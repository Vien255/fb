import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import fbNameLogo from "../../assets/fbNameLogo.png";
import { infoUsersSlice } from "../../features/infoUsersSlice";
import { authenService } from "../../service";
import "./style.scss";

const schema = yup
  .object({
    email: yup
      .string()
      .required()
      .matches(`[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]`, "email must match"),
    password: yup.string().required(),
  })
  .required();

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    email: "vienlc@gmail.com",
    password: "123123",
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSumbit = async (data) => {
    try {
      const response = await authenService.login(data);
      sessionStorage.setItem("JWTtoken", response.data.user.token);
      dispatch(infoUsersSlice.actions.info(response.data.user));
      navigate("/");
    } catch (error) {}
  };
  return (
    <div className="login">
      <div className="logo">
        <img src={fbNameLogo} alt="name logo" />
        <h3>
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </h3>
      </div>
      <div className="loginCard">
        <div className="card">
          <span className="title">Đăng Nhập</span>
          <Form onFinish={handleSubmit(onSumbit)}>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your email"
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
                  placeholder="Enter password"
                  status={errors.password && "error"}
                />
              )}
            />
            <button type="submit">Đăng Nhập</button>
          </Form>
          <div className="hr"></div>
          <Link to="/register">
            <button type="submit" style={{ backgroundColor: "green" }}>
              Đăng Ký
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
