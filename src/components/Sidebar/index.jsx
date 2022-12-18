import { DownCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import {
  icon1,
  icon2,
  icon3,
  icon4,
  code1,
  code2,
  code3,
  code4,
} from "../../assets";
import "./style.scss";

export const SideBar = () => {
  const infos = useSelector((state) => state.infoUsers.info);
  return (
    <div className="sideBarContainer">
      <div className="sidebar left">
        <div className="container borderNone">
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: `url(${infos.image})` }}
            ></div>
            <div className="name">{infos.username}</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: `url(${icon1})` }}
            ></div>
            <div className="name">COVID-19 info center</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: `url(${icon2})` }}
            ></div>
            <div className="name">Pages</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: `url(${icon3})` }}
            ></div>
            <div className="name">Friends</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: `url(${icon4})` }}
            ></div>
            <div className="name">Messenger</div>
          </div>
          <div className="globalProfile">
            <div className="globalRoundProfile circle">
              <DownCircleOutlined />
            </div>
            <div className="name">See More</div>
          </div>
        </div>

        <div className="container">
          <div className="mainTitle">
            <h3 className="padding">Your Shortcuts</h3>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile r-10"
              style={{ backgroundImage: `url(${code1})` }}
            ></div>
            <div className="name">Html Css Javascript</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile r-10"
              style={{ backgroundImage: `url(${code2})` }}
            ></div>
            <div className="name">Tutorials</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile r-10"
              style={{ backgroundImage: `url(${code3})` }}
            ></div>
            <div className="name">Coding</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile r-10"
              style={{ backgroundImage: `url(${code4})` }}
            ></div>
            <div className="name">VueJS</div>
          </div>
          <div className="globalProfile">
            <div className="globalRoundProfile circle">
              <i className="fas fa-angle-down"></i>
            </div>
            <div className="name">See More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
