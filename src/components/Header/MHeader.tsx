import React from 'react'

export default function MHeader() {
  return (
    <div className='header bg-quaternary/20 z-50'>
        <nav className='nav z-30 relative flex pt-6 pb-6 flex-wrap items-center justify-center'>
            <a href="" className='navbar-brand'>
                <img src="../images/logo/logo-dark.png" alt="" />
            </a>
            <div className='navber-wrapper'>
                <ul className='navbar-nav flex flex-row w-auto'>
                    <li className='nav-item'>
                        <a  className='nav-link' href="/">Home</a>
                    </li>
                    <li className='nav-item'>
                        <a  className='nav-link' href="/about">About</a>
                    </li>
                    <li className='nav-item'>
                        <a  className='nav-link' href="/blog">Blog</a>
                    </li>
                    <li className='nav-item'>
                        <a  className='nav-link' href="/pages">Pages</a>
                    </li>
                </ul>
                <div className='order-2'>
                    <div className='flex'>
                        <a href="/login" className='btn'>Login</a>
                        <a href="/contact" className='btn'>Get Started</a>
                    </div>
                </div>
            </div>
        </nav>
      
    </div>
  )
}
