import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { styles } from '../style';
import { navLinks } from '../constants';
import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';
import Close from '../assets/close.svg';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleNav = (title) => {
    setNav(!nav);
    setActive(title);
  };
  return (
    <div
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={Logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            &nbsp; Jonathan&nbsp;
            <span className='sm:block hidden'> / YeuHaw Teh </span>
          </p>
        </Link>
        <ul className='list-non hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div onClick={handleClick} className='sm:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'
          }
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => {
                setActive(link.title);
                setNav(!nav);
              }}
              className='py-6 text-3xl'
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
