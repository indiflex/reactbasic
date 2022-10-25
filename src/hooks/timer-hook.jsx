import { useEffect } from 'react';

export const useTimer = () => {
  const useTimeout = (cb, delay) => {
    useEffect(() => {
      const tmout = setTimeout(cb, delay);

      return () => clearTimeout(tmout);
    }, []);
  };

  return { useTimeout };
};
