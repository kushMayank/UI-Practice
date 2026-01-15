// Debouncing: "Wait until they're done, then act once"
// Throttling: "Act regularly while they're doing it"

import { useState, useEffect, useRef, useCallback } from "react";

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (Date.now() - lastRan.current >= delay) {
          setThrottledValue(value);
          lastRan.current = Date.now();
        }
      },
      delay - (Date.now() - lastRan.current),
    );

    return () => clearTimeout(timer);
  }, [value, delay]);

  return throttledValue;
}

// Usage
export function ScrollComponent() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 200);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Throttled scroll position:", throttledScrollY);
  }, [throttledScrollY]);

  return <div>Scroll position: {throttledScrollY}</div>;
}

function useThrottledCallback(callback, delay) {
  const lastRan = useRef(Date.now());

  return useCallback(
    (...args) => {
      if (Date.now() - lastRan.current >= delay) {
        callback(...args);
        lastRan.current = Date.now();
      }
    },
    [callback, delay],
  );
}

// Usage
function App() {
  const handleScroll = useThrottledCallback(() => {
    console.log("Scroll event!");
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return <div style={{ height: "200vh" }}>Scroll me!</div>;
}
// In JS solution

function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Example: scroll handler
const handleScroll = throttle(() => {
  console.log("Scroll position:", window.scrollY);
}, 200);

window.addEventListener("scroll", handleScroll);
