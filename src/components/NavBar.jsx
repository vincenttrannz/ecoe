import React, { useState } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Hamburger } from '../img/hamburger.svg';

export default function NavBar() {
  const [MenuExpanded, SetMenuExpanded] = useState(false);

  const handleMenuExpanded = (e) => {
    SetMenuExpanded(!MenuExpanded);
  }
  return (
    <>
      <header className="navbar__wrapper">
        <nav className='container'>
          <div className='navbar__container'>
            <div className='navbar__left-container'>
              <a className='logo__container' href='#'>
                <Logo className='icon'/>
                <h5><span className='font-colour-one'>E</span>co<span className='font-colour-one'>E</span></h5>
              </a>
              <div className='navi-links-container'>
                <a className='nav-link' href='#'>Home</a>
                <a className='nav-link' href='#'>About</a>
                <a className='nav-link' href='#'>News</a>
                <a className='nav-link' href='#'>Contact</a>
              </div>
            </div>
            <div className='navbar__right-container'>
              <a className='nav-link' href='#'>Login</a>
              <button className='btn btn-primary'>
                Get Started
              </button>
            </div>
            <Hamburger onClick={handleMenuExpanded} className='hamburger icon'/>
          </div>
        </nav>
        <div className={`dropdown ${!MenuExpanded ? "hidden" : ""}`}>
          <div className='container'>
            <div className='navi-links-container'>
              <a className='nav-link' href='#'>Home</a>
              <a className='nav-link' href='#'>About</a>
              <a className='nav-link' href='#'>News</a>
              <a className='nav-link' href='#'>Contact</a>
              <a className='nav-link' href='#'>Login</a>
              <button className='btn btn-primary'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
