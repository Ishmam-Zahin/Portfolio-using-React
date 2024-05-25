import { useEffect, useRef, useState } from "react";

export function useAutomateWrite(sentence, time, stalltime = 5000) {
  const [word, setWord] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(
    function () {
      if (index < sentence.length) {
        timer.current = setTimeout(
          () => {
            setWord((cur) => {
              const nword = cur + sentence[index];
              return nword;
            });
            setIndex((cur) => cur + 1);
          },
          index === 0 ? stalltime : time
        );
      } else {
        setIsFinished(true);
      }

      return function () {
        clearTimeout(timer.current);
      };
    },
    [word, index, sentence, time, stalltime]
  );

  return [word, isFinished];
}
