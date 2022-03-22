import React from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';

export default function NavBar() {
  return (
    <header className="navbar__wrapper">
      <nav className='container'>
        <div className='navbar__container'>
          <div className='navbar__left-container'>
            <div className='logo__container'>
              <Logo className='icon'/>
              <h5><span className='font-colour-one'>E</span>co<span className='font-colour-one'>E</span></h5>
            </div>
            <div className='navi-links-container'>
              <a href='/'>Home</a>
              <a href='/'>About</a>
              <a href='/'>News</a>
              <a href='/'>Contact</a>
            </div>
          </div>
          <div className='navbar__right-container'>
            <a href='/'>Login</a>
            <button className='btn btn-primary'>
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
