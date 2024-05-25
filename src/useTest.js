import { useEffect, useRef, useState } from "react";

export function useTest(numberArray) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const maxValue = useRef(numberArray[0]);
  const intervalArray = useRef(null);
  const counterArray = useRef(null);
  const timer = useRef(null);
  const globalValue = useRef(0);

  useEffect(
    function () {
      const tmp1 = numberArray.map((value, i) => {
        if (maxValue.current % value === 0) {
          const x = maxValue.current / value;
          return [x, x];
        } else {
          const x = Math.floor(maxValue.current / value);
          const y = Math.ceil(maxValue.current / value);
          return [x, y];
        }
      });
      intervalArray.current = tmp1;

      const tmp2 = tmp1.map(([value1, value2], i) => {
        const x = value2 * numberArray[i] - maxValue.current;
        const y = numberArray[i] - x;

        return [x, y];
      });
      counterArray.current = tmp2;

      return function () {
        console.log("clean up");
      };
    },
    [numberArray]
  );

  useEffect(function () {
    // console.log(
    //   intervalArray,
    //   counterArray,
    //   globalValue.current,
    //   maxValue.current
    // );
    if (globalValue.current < maxValue.current) {
      globalValue.current++;
    }
    console.log("i am in effect");
  }, []);

  return [value1, value2, value3, value4];
}
