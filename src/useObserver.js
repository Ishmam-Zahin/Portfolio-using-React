import { useRef, useEffect } from "react";

export function useObserver(root, threshold, noOfelements, onIntersect) {
  const observer = useRef(null);
  const elements = useRef(new Array(noOfelements));

  useEffect(
    function () {
      console.log("xxx");
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(observer);
              observer.current.unobserve(entry.target);
              onIntersect(entry.target);
            }
          });
        },
        {
          root: root,
          threshold: threshold,
        }
      );

      elements.current.forEach((el) => observer.current.observe(el));
    },
    [root, threshold, onIntersect]
  );

  return [elements];
}
