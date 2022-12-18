import { CreatePost } from "./CreatePots";
import { MainPost } from "./MainPost";
import { Rooms } from "./Rooms";
import { Story } from "./Story";
import "./style.scss";
export const CectionSenter = () => {
  return (
    <div className="sectionCenter">
      <Story />
      <CreatePost />
      <Rooms />
      <MainPost />
    </div>
  );
};
