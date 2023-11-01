import { useEffect, useState } from 'react';

const useScrollX = () => {
  const [scrollPosition, setScrollPosition] = useState({ scrollX: 0 });

  useEffect(() => {
    const updatePosition = () => {
      requestAnimationFrame(() => {
        setScrollPosition({ scrollX: window.scrollX });
      });
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollX;
