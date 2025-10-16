import { useState, useEffect, useRef } from "react";
import { useCountUp } from "react-countup";

export default function AnimatedCounter({
  endValue,
  duration = 2000,
  suffix = "",
  prefix = "",
  className = ""
}) {
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  const { countUp, start } = useCountUp({
    ref: elementRef,
    start: 0,
    end: endValue,
    duration: duration / 1000,
    suffix,
    prefix,
    startOnMount: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted && start) {
          setHasStarted(true);
          start();
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [start, hasStarted]);

  return (
    <span ref={elementRef} className={className}>
      {countUp || 0}
    </span>
  );
}