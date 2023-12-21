import React, { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();

      const targetId = e.target.getAttribute('data-target');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    document.addEventListener('DOMContentLoaded', () => {
      const links = document.querySelectorAll('a[data-target]');

      links.forEach((link) => {
        link.addEventListener('click', handleSmoothScroll);
      });
    });

    return () => {
      // Cleanup code (remove event listeners, if necessary)
      const links = document.querySelectorAll('a[data-target]');
      links.forEach((link) => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []); // Run the effect only once on component mount

  return <></>; // Placeholder, or you can render something if needed
};

export default SmoothScroll;
