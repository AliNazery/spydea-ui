import Header from '@/components/Header/Header'
import MainSection from '@/components/Main'
import GallerySection from '@/components/Section/GallerySection'
import sectionTwo from '@/components/Section/SecctionTwo'
import Vision from '@/components/Section/Vision'
import React from 'react'
import Achieving from '@/components/Section/Achieving'

export default function About() {
  return (
    <>
        <div className="line-bg fixed left-0 top-1/2 z-10 flex h-screen w-full -translate-y-1/2 justify-between">
            <div className="container flex justify-between">
                <span className=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span className=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span className=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span className=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span className=" inline-block h-full opacity-50 md:opacity-100"></span>
                <span className=" inline-block h-full opacity-50 md:opacity-100"></span>
            </div>
        </div>
        {/* <Header/> */}
        <MainSection/>
        <GallerySection/>
        <Vision/>
        <Achieving/>
        
        
    </>
  )
}
