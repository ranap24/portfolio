import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
   <div className='Navigation'>
    <div>
        {/* logo */}
    </div>
    <div className='Navigation_links'>
        <a href='/about'>About</a>
        <a href='/'>Projects</a>
        <a href='#'>Contact</a>
    </div>
   </div>
  )
}

export default Navigation
