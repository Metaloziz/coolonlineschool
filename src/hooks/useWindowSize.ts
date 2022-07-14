import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const onResize = () => {
      setSize({
        width: window.outerWidth,
        height: window.outerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
