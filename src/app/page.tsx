// import Image from "next/image";
import { Metadata } from "next";
import "../styles/globals.css";
import { Hero } from "@/components/Home/Hero/Hero";
import Brands from "@/components/Home/Brands/Brands";
import Features from "@/components/Features/Features";
import Acheivement from "@/components/Acheivment/Acheivement";
import Innovative from "@/components/Home/Innovative";
import Article from "@/components/Article/Article";
import Collaborative from "@/components/Home/Collaborative";
import Testemonials from "@/components/Home/Testemonials";
import Experience from "@/components/Experience/Experience";


export const metadata: Metadata = {
  title: "Spydea",
  description: "",
  // other metadata
};
export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Features />
      <Experience />
      <Acheivement />
      <Innovative />
      <Collaborative />
      <Testemonials />
      <Article />
    </main>
  );
}
