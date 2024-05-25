import { useEffect, useRef, useState } from "react";

export function useAutomateWrite(sentence, time, stalltime = 5000) {
  const [word, setWord] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const index = useRef(0);
  const timer = useRef(null);

  useEffect(
    function () {
      if (index.current < sentence.length) {
        timer.current = setTimeout(
          () => {
            setWord((cur) => {
              const nword = cur + sentence[index.current];
              index.current++;
              return nword;
            });
          },
          index.current === 0 ? stalltime : time
        );
      } else {
        setIsFinished(true);
      }

      return function () {
        clearTimeout(timer.current);
        // console.log(timer.current, index.current);
      };
    },
    [word, index, sentence, time, stalltime]
  );

  return [word, isFinished];
}
