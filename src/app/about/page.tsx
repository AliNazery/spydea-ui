import MainSection from "@/components/Main";
import GallerySection from "@/components/Section/GallerySection";
import Vision from "@/components/Section/Vision";
import React from "react";
import Achieving from "@/components/Section/Achieving";
import Team from "@/components/Section/team";

export default function About() {
  return (
    <>
      <MainSection />
      <GallerySection />
      <Vision />
      <Achieving />
      <Team />
    </>
  );
}
