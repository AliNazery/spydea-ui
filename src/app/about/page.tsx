import React from "react";
import Acheivement from "@/components/Acheivment/Acheivement";
import Photo from "@/components/Section/photo";
import Tittle from "@/components/Section/titles";
import Team from "@/components/Section/team";
import JoinOurTeam from "@/components/Section/joinOurTeam";
import PageHeader from "@/components/Common/PageHeader/PageHeader";

export default function About() {
  return (
    <>
      <PageHeader
        title="About Spydea"
        currentPage="About"
        description="Vivamus accu msan tincidunt. Vestib ulum ac diam sit amet quam vehicula elementum sed suscipit tortor eget felis porttitor volut."
      />
      <Photo />
      <Tittle />
      <Acheivement />
      <Team />
      <JoinOurTeam />
    </>
  );
}
