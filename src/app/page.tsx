// import Image from "next/image";
import { Metadata } from "next";
import "../styles/globals.css";
import { Hero } from "@/components/Hero/Hero";
import Brands from "@/components/Brands/Brands";
import Features from "@/components/Features/Features";
// import Experience from "@/components/Experience/Experience";
import Acheivement from "@/components/Acheivment/Acheivement";
import Innovative from "@/components/Hero/Innovative";
import Article from "@/components/Article/Article";
import Collaborative from "@/components/Hero/Collaborative";
import Testemonials from "@/components/Hero/Testemonials";


export const metadata: Metadata = {
  title: "Wama Solution",
  description: "",
  // other metadata
};
export default function Home() {
  return (
    <main>
      {/* <bgLine/> */}
      <Hero />
      <Brands />
      <Features />
      {/* <Projects /> */}
      {/* <Experience /> */}
      <Acheivement />
      <Innovative />
      <Collaborative />
      <Testemonials />
      <Article />
    </main>
  );
}
