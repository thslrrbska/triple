import { useState, useEffect } from "react";

const CountAnimation = ({ start = 0, end, duration = 2000 }) => {
  const [count, setCount] = useState(end);
  const stepTime = Math.abs(Math.floor(duration / (end - start)));
  const maxInterval = 100;
  useEffect(() => {
    let currentCount = end;
    const handle = setInterval(() => {
      setCount(Math.ceil(end - currentCount));
      currentCount < 1 && clearInterval(handle);
      const interval = stepTime < 20 ? maxInterval : stepTime;
      const step = currentCount / interval;
      currentCount -= step;
    }, stepTime);
  }, []);
  return count;
};

export default CountAnimation;
