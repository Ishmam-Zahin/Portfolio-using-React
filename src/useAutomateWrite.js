import { useEffect, useRef, useState } from "react";

export function useAutomateWrite(sentence, time, stalltime = 5000) {
  const [word, setWord] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const index = useRef(0);

  useEffect(
    function () {
      if (index.current < sentence.length) {
        setTimeout(
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
    },
    [word, index, sentence, time, stalltime]
  );

  return [word, isFinished];
}
