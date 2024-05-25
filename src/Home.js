import { useEffect, useState } from "react";
import "./Home.css";
import { useAutomateWrite } from "./useAutomateWrite";

const sentences = [
  "Hi, I am\nMd. Ishmam Zahin.",
  "I am a full stack\nweb developer in Bangladesh.",
];

export default function Home() {
  const [currentActive, setCurrentActive] = useState(0);

  function handleSetCurrentActive() {
    setCurrentActive((cur) => (cur + 1) % 2);
  }

  return (
    <div className="home-container">
      <Section id={0} currentActive={currentActive}>
        {currentActive === 0 && (
          <>
            <Intro
              handleSetCurrentActive={handleSetCurrentActive}
              sentence={sentences[0]}
            />
            <Button>Download CV</Button>
          </>
        )}
      </Section>
      <Section id={1} currentActive={currentActive}>
        {currentActive === 1 && (
          <>
            <Intro
              handleSetCurrentActive={handleSetCurrentActive}
              sentence={sentences[1]}
            />
            <Button>Download CV</Button>
          </>
        )}
      </Section>
    </div>
  );
}

function Section({ id, currentActive, children }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (id === currentActive) {
      setOpacity(1);
    } else {
      setOpacity(0);
    }
  }, [currentActive, id]);

  return (
    <div
      className={`section-container`}
      style={{
        backgroundImage: `url(./bg-${id}.jpg)`,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
}

function Intro({ handleSetCurrentActive, sentence }) {
  const [top, setTop] = useState(35);
  const [opacity, setOpacity] = useState(0);
  const [word, isFinished] = useAutomateWrite(sentence, 100, 1500);

  useEffect(() => {
    if (isFinished) {
      setTimeout(handleSetCurrentActive, 5000);
    }
  }, [isFinished, handleSetCurrentActive]);

  useEffect(() => {
    function handleTransition() {
      setTop(30);
      setOpacity(1);
    }
    setTimeout(handleTransition, 200);
  }, []);

  return (
    <div
      style={{
        top: `${top}%`,
        opacity: opacity,
      }}
    >
      <textarea value={word + "|"} readOnly disabled />
      <p>100% React and vanilla CSS used.</p>
    </div>
  );
}

function Button({ children }) {
  const [top, setTop] = useState(35);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function handleTransition() {
      setTop(30);
      setOpacity(1);
    }
    setTimeout(handleTransition, 200);
  }, []);

  return (
    <button
      style={{
        top: `${top}%`,
        opacity: opacity,
      }}
    >
      {children}
    </button>
  );
}
