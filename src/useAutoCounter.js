import { useEffect, useRef, useState } from "react";

export function useAutoCounter(number, time, stallTime, start = false) {
  const [value, setValue] = useState(0);
  const timer = useRef(null);

  useEffect(
    function () {
      if (start) {
        if (value < number) {
          timer.current = setTimeout(
            function () {
              setValue((cur) => cur + 1);
            },
            value === 0 ? stallTime : time
          );
        }
      }

      return function () {
        if (!timer) clearTimeout(timer.current);
      };
    },
    [value, time, number, stallTime, start]
  );

  return [value];
}
