import React from 'react'

export default function Header() {
  return (
    <header className='bg-quaternary/20 z-50 header sticky top-0 transition-colors duration-200 ease-in-out'>
        <nav className='z-30 relative lg:navbar lg:pt-6 lg:pb-6'>
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
            <div className='lg:visible static h-auto w-auto flex flex-row overflow-visible bg-transparent p-0 opacity-100 filter drop-shadow-none'>
                {/* navbar nav */}
                <ul className='lg:(flex flex-row order-2 ml-auto mr-0 w-auto bg-transparent) md:text-left  order-3 mx-auto flex flex-col items-center justify-center text-center '>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
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
      
    </header>
  )
}
