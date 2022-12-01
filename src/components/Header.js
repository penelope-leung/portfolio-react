import React from 'react';
// // Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import Navigation from './Navigation';


function Header() {
  return (
    <header >
         <Navigation />
    </header>
  );
}

export default Header;
