import { useRef, useEffect, useState } from "react";

export function useObserver(root, threshold) {
  const element = useRef(null);
  const observer = useRef(null);
  const [isIntersected, setIsIntersected] = useState(false);

  useEffect(
    function () {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsIntersected(true);
            observer.current.unobserve(element.current);
          });
        },
        {
          root: root,
          threshold: threshold,
        }
      );

      observer.current.observe(element.current);
    },
    [root, threshold]
  );

  return [element, isIntersected];
}
