import "./MainContent.css";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";
import Services from "./Services.js";

export default function MainContent({ currentActiveTab }) {
  return (
    <div className="main-container">
      {currentActiveTab === 1 && <Home />}
      {currentActiveTab === 2 && <AboutMe />}
      {currentActiveTab === 3 && <Services />}
    </div>
  );
}
