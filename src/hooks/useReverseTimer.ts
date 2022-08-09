import { useEffect, useState } from 'react';

export const useReverseTimer = (initialSeconds: number) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timerId, setTimerId] = useState<number>(0);

  const stop = () => {
    clearTimeout(timerId);
    setIsActive(false);
  };

  const start = () => {
    setIsActive(true);
    const id: number = window.setTimeout(setSeconds, 1000, seconds - 1);
    setTimerId(id);
  };

  const restart = () => {
    setSeconds(initialSeconds);
    setIsActive(true);
  };

  const startTimer = () => {
    setSeconds(initialSeconds);
    setIsActive(true);
  };

  const clearTimer = () => {
    setIsActive(false);
    stop();
  };

  useEffect(() => {
    if (seconds > 0 && isActive) {
      start();
    }

    if (!isActive || seconds < 0) {
      stop();
    }
  }, [seconds, isActive]);

  return { seconds, startTimer, restart, clearTimer };
};
