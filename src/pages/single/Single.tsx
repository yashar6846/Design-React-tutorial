import Sidebar from "../../Component/sidebar/Sidebar";
import SinglePost from "../../Component/singlePost/SinglePost";
import "./single.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
