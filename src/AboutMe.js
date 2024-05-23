import { useEffect, useState, useRef, useCallback } from "react";
import { useObserver } from "./useObserver";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <Intro />
      <Boxes />
    </div>
  );
}

function Intro() {
  const [translate, setTranslate] = useState(-200);
  const [opacity, setOpacity] = useState(0);
  const elements = useRef(new Array(1));
  const handleIntersection = useCallback(
    function (element) {
      if (elements.current[0] === element) {
        setOpacity(1);
        setTranslate(0);
      }
    },
    [elements]
  );
  useObserver(null, 0.4, elements, handleIntersection);

  return (
    <div
      className="detail-container"
      ref={(el) => (elements.current[0] = el)}
      style={{
        transform: `translate(${translate}px, 0)`,
        opacity: opacity,
      }}
    >
      <p>ABOUT ME</p>
      <h2>WHO AM I?</h2>
      <p className="para">
        <b>Hi I'm Ishmam Zahin</b> On her way he met a copy. The copy warned the
        Little Blind Text, that where it came from it would have been rewritten
        a thousand times and everything that was left from its origin would be
        the word "and" and the Little Blind Text should turn around and return
        to its own, safe country.
      </p>
      <p className="para">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
    </div>
  );
}

function Boxes() {
  // const [translate0, setTranslate0] = useState(100);
  // const [translate1, setTranslate1] = useState(100);
  // const [translate2, setTranslate2] = useState(100);
  // const [translate3, setTranslate3] = useState(100);
  // const [translate4, setTranslate4] = useState(100);
  // const [translate5, setTranslate5] = useState(100);
  // const [translate6, setTranslate6] = useState(100);
  // const [translate7, setTranslate7] = useState(100);

  const elements = useRef(new Array(8));
  const handleIntersect = useCallback(function (element) {
    element.style.transform = `translate(0, 0)`;
    element.style.opacity = `1`;
  }, []);
  useObserver(null, 0.1, elements, handleIntersect);

  return (
    <div className="box-container">
      <Box id={0} elements={elements} />
      <Box id={1} elements={elements} />
      <Box id={2} elements={elements} />
      <Box id={3} elements={elements} />
      <Box id={4} elements={elements} />
      <Box id={5} elements={elements} />
      <Box id={6} elements={elements} />
      <Box id={7} elements={elements} />
    </div>
  );
}

function Box({ id, elements }) {
  return (
    <div className="box" ref={(el) => (elements.current[id] = el)}>
      Hello world
    </div>
  );
}
