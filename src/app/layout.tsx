import Announcement from "@/components/announcement/Announcement";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '../styles/globals.css'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AOSWrapper from "@/components/AOS/AOSWrapper";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AOSWrapper/>
        <Announcement/>
        <Header/>
          {children}
        <Footer/>
        </body>
    </html>
  );
}
