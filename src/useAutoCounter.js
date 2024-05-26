import { useEffect, useRef, useState } from "react";

export function useAutoCounter(numberArray, start) {
  const maxValue = useRef(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [globalCounter, setGlobalCounter] = useState(0);

  useEffect(
    function () {
      if (start) {
        maxValue.current = numberArray[0];
        let timer = null;
        if (globalCounter < maxValue.current) {
          timer = setTimeout(() => {
            setGlobalCounter((cur) => cur + 1);
          }, 1);
        }

        return function () {
          clearTimeout(timer);
        };
      }
    },
    [globalCounter, numberArray, start]
  );

  useEffect(
    function () {
      if (globalCounter >= 1) {
        numberArray.forEach((v, i) => {
          let fValue = Math.floor(maxValue.current / v);
          const range = v - (maxValue.current % v);
          if (globalCounter <= range * fValue) {
            if (globalCounter % fValue === 0) {
              if (i === 0) {
                setValue1((cur) => cur + 1);
              }
              if (i === 1) {
                setValue2((cur) => cur + 1);
              }
              if (i === 2) {
                setValue3((cur) => cur + 1);
              }
              if (i === 3) {
                setValue4((cur) => cur + 1);
              }
            }
          } else {
            const tmp = fValue * range;
            fValue++;
            if ((globalCounter - tmp) % fValue === 0) {
              if (i === 0) {
                setValue1((cur) => cur + 1);
              }
              if (i === 1) {
                setValue2((cur) => cur + 1);
              }
              if (i === 2) {
                setValue3((cur) => cur + 1);
              }
              if (i === 3) {
                setValue4((cur) => cur + 1);
              }
            }
          }
        });
      }
    },
    [globalCounter, numberArray]
  );

  return [value1, value2, value3, value4];
}
