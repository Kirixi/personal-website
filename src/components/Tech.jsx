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
      <div className='rounded-full h-60 w-60 border border-cyan-400 animate-rotateSlow'>
        {/* <span class='absolute top-0 left-1/2 w-12 h-12 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2'></span>
        <span class='absolute bottom-0 left-1/2 w-12 h-12 bg-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2'></span>
        <span class='absolute top-1/2 left-0 w-12 h-12 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2'></span>
        <span class='absolute top-1/2 right-0 w-12 h-12 bg-yellow-500 rounded-full transform translate-x-1/2 -translate-y-1/2'></span> */}
        {/* <div class='absolute inset-1/4 rounded-full border h-30 w-30 border-cyan-400 animate-rotateFast'>
          <span class='absolute top-0 left-1/2 w-2 h-2 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2'></span>
          <span class='absolute bottom-0 left-1/2 w-2 h-2 bg-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2'></span>
          <span class='absolute top-1/2 left-0 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2'></span>
          <span class='absolute top-1/2 right-0 w-2 h-2 bg-yellow-500 rounded-full transform translate-x-1/2 -translate-y-1/2'></span>
        </div> */}
      </div>
      {/* {isMobile
        ? technologies.slice(0, 5).map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))
        : technologies.map((tech) => (
            <div className='w-28 h-28' key={tech.name}>
              <BallCanvas icon={tech.icon} />
            </div>
          ))} */}
    </div>
  );
};
export default SectionWrapper(Tech, 'tech');
