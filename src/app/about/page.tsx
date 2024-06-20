import MainSection from "@/components/Main";
import React from "react";
import Acheivement from "@/components/Acheivment/Acheivement";
import Photo from "@/components/Section/photo";
import Tittle from "@/components/Section/titles";
import Team from "@/components/Section/team";
import JoinOurTeam from "@/components/Section/joinOurTeam";

export default function About() {
  return (
    <>
      <MainSection />
      <Photo />
      <Tittle/>
      <Acheivement/>
      <Team />
      <JoinOurTeam/>
    </>
  );
}
