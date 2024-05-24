// import Image from "next/image";
import { Metadata } from "next";
import '../styles/globals.css'
import { Hero } from "@/components/Hero/Hero";
import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
import Experience from "@/components/Experience/Experience";
import Acheivement from "@/components/Acheivment/Acheivement";
import Innovative from "@/components/Innovative/Innovative";
import Article from "@/components/Article/Article";



export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};
export default function Home() {
  return (
    <main>
        <Hero/>
        <Brands/>
        <Features/>
        <Experience/>
        <Acheivement/>
        <Innovative/>
        <Article/>
    </main>
  );
}






