import { useEffect, useState } from "react";
import { useObserver } from "./useObserver";
import "./AboutMe.css";

export default function AboutMe() {
  const [translate, setTranslate] = useState(-200);
  const [opacity, setOpacity] = useState(0);
  const [element, isIntersected] = useObserver(null, 0);

  useEffect(
    function () {
      if (isIntersected) {
        setTranslate(0);
        setOpacity(1);
      }
    },
    [isIntersected]
  );

  return (
    <div className="aboutme-container">
      <div
        className="detail-container"
        ref={element}
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
    </div>
  );
}
