import { useEffect, useRef } from "react";
export default function useOutsideClick(handler, capturePhase = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClick, capturePhase);

      return function () {
        document.removeEventListener("click", handleClick, capturePhase);
      };
    },
    [handler]
  );

  return ref;
}
