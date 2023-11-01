import { useState, useEffect } from 'react';
import useScrollY from './useScrollY.js';

const useParallax = () => {
  const { scrollY } = useScrollY();
  const [translateBanner, setTranslateBanner] = useState('translate3d(0px 0px 0px)');
  const [translateLayer, setTranslateLayer] = useState('translate3d(0px 0px 0px)');

  useEffect(() => {
    const updateStyles = () => {
      const newTranslateBanner = `translate3d(0px, -${scrollY}px, 0px)`;
      const newTranslateLayer = `translate3d(0px, calc(${scrollY}px / 2), 0px)`;

      requestAnimationFrame(() => {
        setTranslateBanner(newTranslateBanner);
        setTranslateLayer(newTranslateLayer);
      });
    };

    window.addEventListener('scroll', updateStyles);
    updateStyles();

    return () => window.removeEventListener('scroll', updateStyles);
  }, [scrollY]);

  return { translateBanner, translateLayer };
};

export default useParallax;
