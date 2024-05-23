import { useRef, useEffect } from "react";

export function useObserver(root, threshold, elements, onIntersect) {
  const observer = useRef(null);

  useEffect(
    function () {
      console.log("i am in observer useEffect");
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
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
    [root, threshold, elements, onIntersect]
  );
}
