import React from 'react'

export default function Header() {
  return (
    <header className='bg-quaternary/20 z-50 header sticky top-0 transition duration-200 ease-in-out'>
        <div className='navbar flex flex-wrap items-center justify-center pt-4 pb-4 transition duration-200 ease-in-out' >
        <div className='container mx-auto'>
            <nav className='relative z-30 pt-6 pb-6 navbar mx-auto w-full px-6'>
            <a className='lg:text-18 xl:text-15 bg-transparent text-current no-underline' href="/">
                <img src="./images/logo/logo-dark.png"
                    alt="spydea" 
                    loading="lazy" 
                    width="158" 
                    height="36" 
                    decoding="async" 
                    className="filter invert" 
                    data-nimg="1" />
            </a>
            {/*  navbar-wrapper */}
            <div className='lg:visible lg:static lg:h-auto lg:w-auto lg:flex-row lg:overflow-visible lg:bg-transparent lg:p-0 lg:opacity-100 lg:filter lg:drop-shadow-none lg:ml-auto lg:flex lg:flex-1 lg:bg-opacity-100 lg:transition-opacity lg:duration-300
            md:absolute md:left-0 md:top-full md:ml-auto md:flex md:h-0 md:w-full md:flex-1 md:flex-col-reverse md:overflow-hidden md:bg-white md:bg-opacity-100 md:p-0 md:opacity-0 md:transition-opacity md:duration-300'>
                {/* navbar nav */}
                <ul className='md:text-left lg:(text-center) md:(order-3 ml-auto mr-auto flex w-full flex-col items-center)
                lg:(order-2 ml-auto mr-0 w-auto flex-row bg-transparent)'>
                    {/* class nav-item */}
                    <li className='lg:(text-left relative z-10 mr-0) md:(relative text-center mr-0)'>
                        <a className='md:(text-sm cursor-pointer select-none)lg:(pl-0 text-base select-none pt-4 pb-4)' href="/">Home</a>
                    </li>
                    <li className='lg:(text-left relative mr-0) md:(relative text-center z-10 mr-0)'>
                        <a className='md:(text-sm cursor-pointer select-none block px-4 py-2 text-center font-normal transition-all duration-150 bg-transparent hover:text-gray-700)
                        lg:(text-base pt-4 pb-4 hover:text-gray-700)' href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Pages</a>
                    </li>

                </ul>

            </div>

         </nav>
         </div>
        </div>
    </header>
  )
}
