// import Image from "next/image";
import Navber from "./Navber";
import { Metadata } from "next";
import '../styles/globals.css'
import Announcement from "@/components/announcement/Announcement";
import Header from "@/components/Header/Header";
import MHeader from "@/components/Header/MHeader";
import Section from "@/components/Section/page";
import { Hero } from "@/components/Hero/Hero";
import Main from "@/components/Hero/Main";
import MLayout from "@/components/MLayout/MLayout";
import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";


export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};
export default function Home() {
  return (
    <main>
        <Announcement/>
        {/* <MHeader/> */}
        {/* <Header/> */}
        <Navber/>
        {/* <Section/> */}
        <Hero/>
        <Brands/>
        <Features/>
        {/* <Main/> */}
    </main>
  );
}






