import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import { socials } from '../constants';

const Socials = () => {
  return (
    <div className='xl:mt12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 0.1)}
        className='flex-[0.8] bg-black-100 p-8 rounded-2xl'
      >
        {' '}
        <p className={styles.sectionSubText}>my other links</p>
        <h2 className={styles.sectionHeadText}>Socials</h2>
        <ul className='mt-12 flex flex-col gap-8'>
          {socials.map((social) => (
            <li
              className={`${social.color} py-4 px-6 text-white justify-between items-center rounded-2xl`}
              key={social.platform}
            >
              <a
                className='flex justify-center items-center w-full text-gray-300'
                href={`${social.link}`}
              >
                {social.platform} &nbsp;&nbsp;{social.icon}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 0.1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Socials, 'socials');
