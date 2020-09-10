import React from 'react';
import logo from '../assets/img/logo192.png';

const Header = () => {
  return ( 
    <div className='header '>
      <div className='container'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}
 
export default Header;