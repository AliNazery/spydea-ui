import React from "react";
import { FaceBookIcon, LinkedinIcon, SKypeIcon, TwitterIcon } from "../Common/Icons/footerIcon/SocialIcon";

export const socialLinks = [
  {
    label: "FaFacebook",
    href: "https://facebook.com/",
    icon: React.createElement(FaceBookIcon),
  },
  {
    label: "FaSkype",
    href: "https://skype.com/",
    icon: React.createElement(SKypeIcon ),
  },
  {
    label: "FaTwitter",
    href: "https://twitter.com/",
    icon: React.createElement(TwitterIcon ),
  },
  {
    label: "FaLinkedin",
    href: "https://www.linkedin.com/",
    icon: React.createElement(LinkedinIcon ),
  },
];


export const footerLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
];


export const widgetLinks = [
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
  { href: "/pricing", label: "Pricing" },
];