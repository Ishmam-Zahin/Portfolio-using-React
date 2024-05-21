import "./MainContent.css";
import Home from "./Home.js";

export default function MainContent({ currentActiveTab }) {
  return (
    <div className="main-container">{currentActiveTab === 1 && <Home />}</div>
  );
}
