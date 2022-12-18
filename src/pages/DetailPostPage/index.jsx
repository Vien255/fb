import { DetailPost } from "../../components/DetailPost.jsx";
import { SideBar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import "./style.scss";

export const DetailPostPage = () => {
  return (
    <div className="detail">
      <Header />
      <SideBar />
      <DetailPost />
    </div>
  );
};
