import { useRef, useCallback } from "react";
import { useObserver } from "./useObserver";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <Intro />
      <Boxes />
      <FinalDetail />
    </div>
  );
}

function Intro() {
  const element = useRef(null);

  const handleIntersection = useCallback(function (element) {
    element.style.transform = `translate(0, 0)`;
    element.style.opacity = `1`;
  }, []);

  useObserver(null, 0.4, "0px 0px 0px 0px", [element], handleIntersection);

  return (
    <div className="detail-container" ref={(el) => (element.current = el)}>
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
  const element0 = useRef(null);
  const element1 = useRef(null);
  const element2 = useRef(null);
  const element3 = useRef(null);
  const element4 = useRef(null);
  const element5 = useRef(null);
  const element6 = useRef(null);
  const element7 = useRef(null);

  const handleIntersect = useCallback(function (element) {
    element.style.transform = `translate(0, 0)`;
    element.style.opacity = `1`;
  }, []);

  useObserver(null, 0.6, "0px", [element0, element3], handleIntersect);
  useObserver(null, 0, "0px", [element1, element2], handleIntersect);
  useObserver(null, 0.2, "0px", [element4, element7], handleIntersect);
  useObserver(null, 0.8, "0px", [element5, element6], handleIntersect);

  return (
    <div className="box-container">
      <Box id={0} element={element0}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="silver"
          >
            <path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-479q89 0 179-25.5T760-679q-11-29-100.5-55T480-760q-91 0-178.5 25.5T200-679q14 30 101.5 55T480-599Zm0 199q42 0 81-4t74.5-11.5q35.5-7.5 67-18.5t57.5-25v-120q-26 14-57.5 25t-67 18.5Q600-528 561-524t-81 4q-42 0-82-4t-75.5-11.5Q287-543 256-554t-56-25v120q25 14 56 25t66.5 18.5Q358-408 398-404t82 4Zm0 200q46 0 93.5-7t87.5-18.5q40-11.5 67-26t32-29.5v-98q-26 14-57.5 25t-67 18.5Q600-328 561-324t-81 4q-42 0-82-4t-75.5-11.5Q287-343 256-354t-56-25v99q5 15 31.5 29t66.5 25.5q40 11.5 88 18.5t94 7Z" />
          </svg>
        </p>
        <p className="p-second">Database</p>
      </Box>
      <Box id={1} element={element1}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="rgb(82, 82, 255)"
          >
            <path d="M236-345 100-480l440-440h271L236-345ZM540-40 303-277l237-237h271L574-277 811-40H540Z" />
          </svg>
        </p>
        <p className="p-second">Mobile App</p>
      </Box>
      <Box id={2} element={element2}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#48752C"
          >
            <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" />
          </svg>
        </p>
        <p className="p-second">Rest Api</p>
      </Box>
      <Box id={3} element={element3}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100px"
            viewBox="0 -960 960 960"
            width="100px"
            fill="rgb(139, 177, 0)"
          >
            <path d="M300-360q-25 0-42.5-17.5T240-420v-40h60v40h60v-180h60v180q0 25-17.5 42.5T360-360h-60Zm220 0q-17 0-28.5-11.5T480-400v-40h60v20h80v-40H520q-17 0-28.5-11.5T480-500v-60q0-17 11.5-28.5T520-600h120q17 0 28.5 11.5T680-560v40h-60v-20h-80v40h100q17 0 28.5 11.5T680-460v60q0 17-11.5 28.5T640-360H520Z" />
          </svg>
        </p>
        <p className="p-second">Frontend</p>
      </Box>
      <Box id={4} element={element4}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#434343"
          >
            <path d="M220-80q-58 0-99-41t-41-99q0-58 41-99t99-41q18 0 35 4.5t32 12.5l153-153v-110q-44-13-72-49.5T340-740q0-58 41-99t99-41q58 0 99 41t41 99q0 48-28 84.5T520-606v110l154 153q15-8 31.5-12.5T740-360q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-18 4.5-35t12.5-32L480-424 343-287q8 15 12.5 32t4.5 35q0 58-41 99t-99 41Zm520-80q25 0 42.5-17.5T800-220q0-25-17.5-42.5T740-280q-25 0-42.5 17.5T680-220q0 25 17.5 42.5T740-160ZM480-680q25 0 42.5-17.5T540-740q0-25-17.5-42.5T480-800q-25 0-42.5 17.5T420-740q0 25 17.5 42.5T480-680ZM220-160q25 0 42.5-17.5T280-220q0-25-17.5-42.5T220-280q-25 0-42.5 17.5T160-220q0 25 17.5 42.5T220-160Z" />
          </svg>
        </p>
        <p className="p-second">Networking</p>
      </Box>
      <Box id={5} element={element5}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#DA954B"
          >
            <path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm3-80q19 0 34.5-10t23.5-27l28-57q15-31 44-48.5t63-17.5h190q34 0 63 18t45 48l28 57q8 17 23.5 27t34.5 10q28 0 48-18.5t21-46.5q0 1-2-19l-84-335q-7-27-28-44t-49-17H285q-28 0-49.5 17T208-659l-84 335q-2 6-2 18 0 28 20.5 47t49.5 19Zm348-280q17 0 28.5-11.5T580-560q0-17-11.5-28.5T540-600q-17 0-28.5 11.5T500-560q0 17 11.5 28.5T540-520Zm80-80q17 0 28.5-11.5T660-640q0-17-11.5-28.5T620-680q-17 0-28.5 11.5T580-640q0 17 11.5 28.5T620-600Zm0 160q17 0 28.5-11.5T660-480q0-17-11.5-28.5T620-520q-17 0-28.5 11.5T580-480q0 17 11.5 28.5T620-440Zm80-80q17 0 28.5-11.5T740-560q0-17-11.5-28.5T700-600q-17 0-28.5 11.5T660-560q0 17 11.5 28.5T700-520Zm-360 60q13 0 21.5-8.5T370-490v-40h40q13 0 21.5-8.5T440-560q0-13-8.5-21.5T410-590h-40v-40q0-13-8.5-21.5T340-660q-13 0-21.5 8.5T310-630v40h-40q-13 0-21.5 8.5T240-560q0 13 8.5 21.5T270-530h40v40q0 13 8.5 21.5T340-460Zm140-20Z" />
          </svg>
        </p>
        <p className="p-second">Games</p>
      </Box>
      <Box id={6} element={element6}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#46152F"
          >
            <path d="M280-240v-480h80v480h-80ZM440-80v-800h80v800h-80ZM120-400v-160h80v160h-80Zm480 160v-480h80v480h-80Zm160-160v-160h80v160h-80Z" />
          </svg>
        </p>
        <p className="p-second">Graphic Design</p>
      </Box>
      <Box id={7} element={element7}>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="80px"
            viewBox="0 -960 960 960"
            width="60px"
            fill="#8B7DBE"
          >
            <path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z" />
          </svg>
        </p>
        <p className="p-second">Animations</p>
      </Box>
    </div>
  );
}

function Box({ id, element, children }) {
  return (
    <div className={`box box-${id}`} ref={(el) => (element.current = el)}>
      {children}
    </div>
  );
}

function FinalDetail() {
  const element = useRef(null);

  const handleIntersection = useCallback(function (element) {
    element.style.transform = `translate(0, 0)`;
    element.style.opacity = `1`;
  }, []);

  useObserver(null, 0.4, "0px 0px 0px 0px", [element], handleIntersection);

  return (
    <div className="final-container" ref={(el) => (element.current = el)}>
      <p>
        I am happy to know you
        <br />
        that 300+ projects done sucessfully!
      </p>
      <button>Hire Me</button>
    </div>
  );
}
