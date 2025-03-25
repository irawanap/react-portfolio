import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-20 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-neutral-300 hover:bg-neutral-900 text-purple-900 font-semibold py-3 px-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Back to top"
        >
          <FaArrowUp className="w-10 h-10" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;