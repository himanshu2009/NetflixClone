import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [show, setHandleShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHandleShow(true);
    } else {
      setHandleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/4/42/Dfnefr.png'
        alt='netflix logo'
      />

      <img
        className='nav_avatar'
        src='https://img.freepik.com/premium-vector/smiling-face-emoji_6735-648.jpg?w=2000'
        alt='smilelogo'
      />
    </div>
  );
};

export default Navbar;
