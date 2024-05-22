import "./MainContent.css";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";

export default function MainContent({ currentActiveTab }) {
  return (
    <div className="main-container">
      {currentActiveTab === 1 && <Home />}
      {currentActiveTab === 2 && <AboutMe />}
    </div>
  );
}
