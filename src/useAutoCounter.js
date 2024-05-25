import { useEffect, useRef, useState } from "react";

export function useAutoCounter(number, time, stallTime) {
  const [value, setValue] = useState(0);
  const timer = useRef(null);

  useEffect(
    function () {
      if (value < number) {
        timer.current = setTimeout(
          function () {
            setValue((cur) => cur + 1);
          },
          value === 0 ? stallTime : time
        );
      }

      return function () {
        clearTimeout(timer.current);
      };
    },
    [value, time, number, stallTime]
  );

  return [value];
}
