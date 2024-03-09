import React, { useState, useEffect } from 'react';
import { RxDoubleArrowUp } from "react-icons/rx";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <RxDoubleArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
