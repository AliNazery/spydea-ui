// import Image from "next/image";
import Navber from "./Navber";
import { Metadata } from "next";
import '../styles/globals.css'
import Announcement from "@/components/announcement/Announcement";
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};
export default function Home() {
  return (
    <main>
      <Announcement/>
      <Header/>
      {/* <Navber/> */}
    </main>
  );
}






