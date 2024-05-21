import "./App.css";
import NavBar from "./NavBar.js";
import Main from "./MainContent.js";
import { useState } from "react";

export default function App() {
  const [currentActiveTab, setCurrentActiveTab] = useState(1);

  function handleCurrentActiveTab(number) {
    if (currentActiveTab === number) return;
    setCurrentActiveTab(number);
  }
  return (
    <>
      <NavBar
        onPress={handleCurrentActiveTab}
        currentActiveTab={currentActiveTab}
      />
      <Main currentActiveTab={currentActiveTab} />
    </>
  );
}
