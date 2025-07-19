import React from 'react';
import logo from '../assets/Logo.png';

function Logo({width}) {
  return (
    <img src={logo} alt="Logo" width={width} />
  )
}

export default Logo