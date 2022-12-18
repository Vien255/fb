import { Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fbNameLogo from "../../assets/fbNameLogo.png";
import { authenService } from "../../service";
import "./style.scss";
import { infoUsersSlice } from "../../features/infoUsersSlice";

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
                <Input {...field} placeholder="Enter your email" />
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
