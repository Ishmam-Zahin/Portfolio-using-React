import { useEffect, useState } from "react";
import "./Home.css";

const sentences = [
  "Hi, I am\nMd. Ishmam Zahin.",
  "I am a full stack\nweb devloper in Bangladesh.",
];

let index = 0;

export default function Home() {
  const [currentActive, setCurrentActive] = useState(0);

  //   console.log(new Date());

  function handleSetCurrentActive() {
    setCurrentActive((cur) => (cur + 1) % 2);
  }

  useEffect(() => {
    index = 0;

    return () => (index = 0);
  }, [currentActive]);

  return (
    <div className="home-container">
      <Section id={0} currentActive={currentActive}>
        <Intro
          id={0}
          currentActive={currentActive}
          handleSetCurrentActive={handleSetCurrentActive}
        />
        <Button id={0} currentActive={currentActive}>
          Download CV
        </Button>
      </Section>
      <Section id={1} currentActive={currentActive}>
        <Intro
          id={1}
          currentActive={currentActive}
          handleSetCurrentActive={handleSetCurrentActive}
        />
        <Button id={1} currentActive={currentActive}>
          Linkedin Profile
        </Button>
      </Section>
    </div>
  );
}

function Section({ id, currentActive, children }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function handleTransition() {
      setOpacity(1);
    }
    if (id === currentActive) {
      setTimeout(handleTransition, 200);
    } else {
      setOpacity(0);
    }
  }, [currentActive, id]);

  return (
    <div
      className={`section-container ${id === currentActive ? "" : "hidden"}`}
      style={{
        backgroundImage: `url(${id === 0 ? "./bg-0.jpg" : "./bg-1.jpg"})`,
        opacity: opacity,
      }}
    >
      {children}
    </div>
  );
}

function Intro({ id, currentActive, handleSetCurrentActive }) {
  const [word, setWord] = useState("");
  const [top, setTop] = useState(50);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function handleTransition() {
      setTop(30);
      setOpacity(1);
    }
    if (id === currentActive) {
      setTimeout(handleTransition, 200);
    } else {
      setTop(50);
      setOpacity(0);
    }
  }, [currentActive, id]);

  useEffect(() => {
    function handleSetWord() {
      setWord((cur) => {
        const nWord = cur + sentences[id].at(index);
        index++;
        return nWord;
      });
    }

    if (id === currentActive) {
      if (index < sentences[id].length) {
        setTimeout(handleSetWord, 100);
      } else {
        setTimeout(handleSetCurrentActive, 5000);
      }
    } else {
      setWord("");
    }
  }, [word, id, currentActive, handleSetCurrentActive]);

  return (
    <div
      style={{
        top: `${top}%`,
        opacity: opacity,
      }}
    >
      <textarea value={word} readOnly />
      <p>100% React and vanilla CSS used.</p>
    </div>
  );
}

function Button({ id, currentActive, children }) {
  const [top, setTop] = useState(50);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    function handleTransition() {
      setTop(30);
      setOpacity(1);
    }
    if (id === currentActive) {
      setTimeout(handleTransition, 200);
    } else {
      setTop(50);
      setOpacity(0);
    }
  }, [currentActive, id]);

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
