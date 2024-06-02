// components/AOSWrapper.tsx
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return null;
};

export default AOSWrapper;