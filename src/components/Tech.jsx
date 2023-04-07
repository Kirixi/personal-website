import React, { Suspense, useState, useEffect } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {isMobile
        ? technologies.slice(0, 5).map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))
        : technologies.map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))}
    </div>
  );
};
export default SectionWrapper(Tech, 'tech');
