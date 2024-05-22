import { useEffect, useState, useRef } from "react";
import { useObserver } from "./useObserver";
import "./AboutMe.css";

export default function AboutMe() {
  const [translate, setTranslate] = useState(-200);
  const [opacity, setOpacity] = useState(0);
  const [elements] = useObserver(null, 0.4, 1, handleIntersection);

  function handleIntersection(element) {
    if (elements.current[0] === element) {
      setOpacity(1);
      setTranslate(0);
    }
  }

  return (
    <div className="aboutme-container">
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
          <b>Hi I'm Ishmam Zahin</b> On her way he met a copy. The copy warned
          the Little Blind Text, that where it came from it would have been
          rewritten a thousand times and everything that was left from its
          origin would be the word "and" and the Little Blind Text should turn
          around and return to its own, safe country.
        </p>
        <p className="para">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
      {/* <Boxes /> */}
    </div>
  );
}

function Boxes() {
  const [elements] = useObserver(null, 1, 8, handleIntersection);

  function handleIntersection(element) {}
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
  const [translate, setTranslate] = useState(50);
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="box" ref={(el) => (elements.current[id] = el)}>
      Hello world
    </div>
  );
}
