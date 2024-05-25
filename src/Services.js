import { useRef, useState } from "react";
import "./Services.css";
import { useCallback } from "react";
import { useObserver } from "./useObserver";
import { useAutoCounter } from "./useAutoCounter";
import { useTest } from "./useTest";

export default function Services() {
  const element = useRef(null);

  const handleIntersect = useCallback(function (element) {
    element.style.transform = `translate(0, 0)`;
    element.style.opacity = `1`;
  }, []);

  useObserver(null, 0.1, "0px", [element], handleIntersect);

  return (
    <div className="services-container">
      <Intro element={element} />
      <Expertises />
      <Records />
    </div>
  );
}

function Intro({ element }) {
  return (
    <div className="intro-container" ref={(el) => (element.current = el)}>
      <p className="heading">WHAT I DO?</p>
      <h2>
        HERE ARE SOME OF MY
        <br />
        EXPERTISE
      </h2>
    </div>
  );
}

function Expertises() {
  const element0 = useRef(null);
  const element1 = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const element5 = useRef(null);

  const handleIntersect = useCallback(function (element) {
    element.style.transform = `translate(0, 0)`;
    element.style.opacity = `1`;
  }, []);

  useObserver(
    null,
    0,
    "0px",
    [element0, element1, element2, element3, element4, element5],
    handleIntersect
  );

  return (
    <div className="expertises-container">
      <Expertise id={0} element={element0}>
        <p className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="64px"
            fill="#EA3323"
          >
            <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
          </svg>
        </p>
        <div className="info-container">
          <h3>PROBLEM SOLVER</h3>
          <p>
            I am a competetive programmer. I have solved different types of
            problems based on different algorithms accross different sites. Such
            as codeforces, codechef, cses, leetcode etc.
          </p>
        </div>
      </Expertise>
      <Expertise id={1} element={element1}>
        <p className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="64px"
            fill="#EA3323"
          >
            <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
          </svg>
        </p>
        <div className="info-container">
          <h3>PROBLEM SOLVER</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
      </Expertise>
      <Expertise id={2} element={element2}>
        <p className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="64px"
            fill="#EA3323"
          >
            <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
          </svg>
        </p>
        <div className="info-container">
          <h3>PROBLEM SOLVER</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
      </Expertise>
      <Expertise id={3} element={element3}>
        <p className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="64px"
            fill="#EA3323"
          >
            <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
          </svg>
        </p>
        <div className="info-container">
          <h3>PROBLEM SOLVER</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
      </Expertise>
      <Expertise id={4} element={element4}>
        <p className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="64px"
            fill="#EA3323"
          >
            <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
          </svg>
        </p>
        <div className="info-container">
          <h3>PROBLEM SOLVER</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
      </Expertise>
      <Expertise id={5} element={element5}>
        <p className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="60px"
            viewBox="0 -960 960 960"
            width="64px"
            fill="#EA3323"
          >
            <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
          </svg>
        </p>
        <div className="info-container">
          <h3>PROBLEM SOLVER</h3>
          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics
          </p>
        </div>
      </Expertise>
    </div>
  );
}

function Expertise({ id, element, children }) {
  return (
    <div
      className={`expertise-container expertise-${id}`}
      ref={(el) => (element.current = el)}
    >
      {children}
    </div>
  );
}

function Records() {
  const [start, setStart] = useState(false);
  // const [value1] = useAutoCounter(300, 10, 100, start);
  // const [value2] = useAutoCounter(200, 15, 100, start);
  // const [value3] = useAutoCounter(100, 40, 100, start);
  // const [value4] = useAutoCounter(50, 100, 100, start);
  console.log(start);
  const element = useRef(null);

  const tmp = useRef([354, 224, 76, 5]);

  const [value1, value2, value3, value4] = useTest(tmp.current);

  const handleIntersect = useCallback(function (element) {
    setStart(true);
  }, []);

  // useObserver(null, 0.5, "0px", [element], handleIntersect);

  return (
    <div className="record-container" ref={(el) => (element.current = el)}>
      <p>
        {value1}
        <br />
        <span>Cup of Coffe</span>
      </p>
      <p>
        {value2}
        <br />
        <span>Projects</span>
      </p>
      <p>
        {value3}
        <br />
        <span>Clients</span>
      </p>
      <p>
        {value4}
        <br />
        <span>Partners</span>
      </p>
    </div>
  );
}
