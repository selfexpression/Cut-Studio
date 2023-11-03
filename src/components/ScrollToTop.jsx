import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const { scrollToTop } = scroll;
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location.pathname, scrollToTop]);

  return null;
};

export default ScrollToTop;
