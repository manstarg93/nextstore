import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number>(0);

  const windowSizHandler = () => {
    setWindowSize(window.innerWidth);
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  };

  useEffect(() => {
    windowSizHandler();

    return () => {
      windowSizHandler();
    };
  }, []);
  return {
    windowSize,
  };
};
