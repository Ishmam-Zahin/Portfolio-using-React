import "./MainContent.css";
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";

import { useTest } from "./useTest.js";

export default function MainContent({ currentActiveTab }) {
  // console.log("i am maincontent");
  // const [test] = useTest();
  return (
    <div className="main-container">
      {currentActiveTab === 1 && <Home />}
      {currentActiveTab === 2 && <AboutMe />}
    </div>
  );
}
