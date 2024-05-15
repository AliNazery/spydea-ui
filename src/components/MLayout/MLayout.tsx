import React from 'react'

interface MLayoutProps {
    children: React.ReactNode;
  }
export default function MLayout() {
  return (
    <div className='line-bg bg-red-500 fixed inset-x-0 top-1/2 z-10 flex h-screen w-full translate-y-1/2 justify-between'>
        <div className='container flex justify-between'>
            <span className='inline-block h-full opacity-50 md:opacity-100'></span>
            <span className='inline-block h-full opacity-50 md:opacity-100'></span>
            <span className='inline-block h-full opacity-50 md:opacity-100'></span>
            <span className='inline-block h-full opacity-50 md:opacity-100'></span>
            <span className='inline-block h-full opacity-50 md:opacity-100'></span>
            <span className='inline-block h-full opacity-50 md:opacity-100'></span>
        </div>
    </div>
  )
}
