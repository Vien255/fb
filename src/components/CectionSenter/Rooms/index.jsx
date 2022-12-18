import {
  profile,
  story1,
  story10,
  story11,
  story2,
  story3,
  story4,
  story5,
  story6,
  story7,
  story8,
  story9,
} from "../../../assets";

export const Rooms = () => {
  return (
    <div className="rooms">
      <div className="title">
        <div className="left">
          <i className="fas fa-video"></i>
          <h3>Rooms</h3>
          <p>Video chat with friends</p>
          <i className="fas fa-exclamation-circle"></i>
        </div>
        <div className="right">
          <a href="#">Create Room</a>
        </div>
      </div>
      <div className="profiles">
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${profile})` }}
        >
          <div className="svg">
            <img src="./svg/plusWhite.svg" alt="" />
          </div>
          <span></span>
          <div className="darkSpan"></div>
        </div>

        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story1})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story2})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story3})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story4})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story5})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story6})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story7})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story8})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story9})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story10})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story11})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
        <div
          className="globalRoundProfile"
          style={{ backgroundImage: `url(${story2})` }}
        >
          <span></span>
          <div className="active"></div>
        </div>
      </div>
    </div>
  );
};
