import Image from "next/image";
import React from "react";
import {
  FooterIconFive,
  FooterIconFour,
  FooterIconOne,
  FooterIconSix,
  FooterIconThree,
  FooterIconTwo,
} from "../Common/Icons/footerIcon/FooterIcon";
import {
  FaceBookIcon,
  LinkedinIcon,
  SKypeIcon,
  TwitterIcon,
} from "../Common/Icons/footerIcon/SocialIcon";
import FooterBanner from "./FooterBanner";
import MainFooter from "./MainFooter";

export default function Footer() {
  return (
    <footer className=" relative z-20 bg-theme-dark after:absolute after:left-0 after:top-0 after:-z-10 after:h-[400px] after:w-full after:bg-[white] after:content-[''] after:clip-path-polygon">
      <FooterBanner/>
      <MainFooter/>
      <div className="absolute bottom-0 left-0 -z-10 h-full w-full">
        <FooterIconFour />
        <FooterIconFive />
        <FooterIconSix />
      </div>
    </footer>
  );
}
