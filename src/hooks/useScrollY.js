import { useEffect, useState } from 'react';

const useScrollY = () => {
  const [scrollPosition, setScrollPosition] = useState({ scrollY: 0 });

  useEffect(() => {
    const updatePosition = () => {
      window.requestAnimationFrame(() => {
        setScrollPosition({ scrollY: window.scrollY });
      });
    };

    window.addEventListener('scroll', updatePosition);
    updatePosition();

    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollY;
