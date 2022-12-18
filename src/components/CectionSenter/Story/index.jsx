import { useSelector } from "react-redux";
import {
  plusWhite,
  story1,
  story10,
  story2,
  story3,
  story4,
  story5,
  story6,
  story7,
  story8,
  story9,
} from "../../../assets";

import "../style.scss";
export const Story = () => {
  const infos = useSelector((state) => state.infoUsers.info);
  return (
    <div className="story">
      <div className="cover">
        <div className="create">
          <div className="svg">
            <img src={plusWhite} alt="Create Story" />
          </div>
          <h3>
            Create a <br />
            Story
          </h3>
        </div>
        <div className="bg" style={{ backgroundImage: `url(${infos.image})` }}>
          <span></span>
        </div>
      </div>

      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: `url(${story1})` }}
          ></div>
        </div>
        <h3>FilipCodes YT</h3>
        <div className="bg" style={{ backgroundImage: `url(${story2})` }}>
          <span></span>
        </div>
      </div>

      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: `url(${story3})` }}
          ></div>
        </div>
        <h3>User Name</h3>
        <div className="bg" style={{ backgroundImage: `url(${story4})` }}>
          <span></span>
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: `url(${story5})` }}
          ></div>
        </div>
        <h3>User Name</h3>
        <div className="bg" style={{ backgroundImage: `url(${story6})` }}>
          <span></span>
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: `url(${story7})` }}
          ></div>
        </div>
        <h3>User Name</h3>
        <div className="bg" style={{ backgroundImage: `url(${story8})` }}>
          <span></span>
        </div>
      </div>
      <div className="cover">
        <div className="pro">
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: `url(${story9})` }}
          ></div>
        </div>
        <h3>User Name</h3>
        <div className="bg" style={{ backgroundImage: `url(${story10})` }}>
          <span></span>
        </div>
      </div>
    </div>
  );
};
