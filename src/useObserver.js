import { useRef, useEffect } from "react";

export function useObserver(
  root,
  threshold,
  rootMargin,
  elements,
  onIntersect
) {
  const observer = useRef(null);

  useEffect(
    function () {
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
          rootMargin: rootMargin,
          threshold: threshold,
        }
      );

      elements.forEach((el) => observer.current.observe(el.current));
    },
    [root, threshold, rootMargin, elements, onIntersect]
  );
}
