import {
  MessageOutlined,
  NotificationOutlined,
  PlusOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Space } from "antd";
import Search from "antd/es/transfer/search";
import { home, logo, map, stoer, tv, users } from "../../assets";
import "./style.scss";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const infos = useSelector((state) => state.infoUsers.info);

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      console.log("1");
    } else {
      sessionStorage.removeItem("JWTtoken");
      navigate("/login");
    }
  };
  const items = [
    {
      label: "Tài Khoản",
      key: "1",
    },
    {
      label: "Đăng Xuất",
      key: "2",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <div className="header">
      <div className="logoSearch">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="search">
          <Search
            placeholder="input search text"
            onSearch={""}
            style={{
              width: 200,
            }}
          />
        </div>
      </div>

      <div className="mainMenu">
        <div className="svg active">
          <img src={home} alt="" />
        </div>
        <div className="svg">
          <img src={tv} alt="" />
        </div>
        <div className="svg">
          <img src={stoer} alt="" />
        </div>
        <div className="svg">
          <img src={users} alt="" />
        </div>
        <div className="svg">
          <img src={map} alt="" />
        </div>
      </div>

      <div className="profileTools">
        <div className="tools">
          <div className="svg">
            <PlusOutlined />
          </div>
          <div className="svg">
            <MessageOutlined />
          </div>
          <div className="svg">
            <NotificationOutlined />
          </div>
          <div className="user">
            <Space wrap>
              <Dropdown.Button
                menu={menuProps}
                placement="bottom"
                icon={<UserOutlined />}
              >
                {infos.username}
              </Dropdown.Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};
