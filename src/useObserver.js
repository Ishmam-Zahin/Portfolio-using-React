import { useRef, useEffect } from "react";

export function useObserver(
  root,
  threshold,
  rootMargin,
  elements,
  onIntersect
) {
  const observer = useRef(null);
  const isRendered = useRef(false);

  useEffect(
    function () {
      isRendered.current = true;
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

      return function () {
        observer.current.disconnect();
        observer.current = null;
      };
    },
    [root, threshold, rootMargin, elements, onIntersect]
  );
}
