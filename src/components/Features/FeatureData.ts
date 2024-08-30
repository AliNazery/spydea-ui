import React from "react";
import {
  FeatureOneSvg,
  FeatureTwoSvg,
  FeatureThreeSvg,
  FeatureFourSvg,
} from "../Common/svg";

export const features = [
  {
    id: 1,
    delay: 200,
    bgColor: "bg-geraldine bg-opacity-20",
    icon: React.createElement(FeatureOneSvg),
    title: "Realtime function",
    description: `Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Mauris blandit aliquet elit, eget tincidunt pulvinar a.
                    Curabitur aliquet quam id dui posuere`,
  },
  {
    id: 2,
    delay: 250,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(FeatureTwoSvg),
    title: "Accurate comment",
    description: `Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Mauris blandit aliquet elit, eget tincidunt pulvinar a.
                    Curabitur aliquet quam id dui posuere`,
  },
  {
    id: 3,
    delay: 300,
    bgColor: "bg-seafoam_blue bg-opacity-20",
    icon: React.createElement(FeatureThreeSvg),
    title: "Plugins support",
    description: `Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Mauris blandit aliquet elit, eget tincidunt pulvinar a.
                    Curabitur aliquet quam id dui posuere`,
  },
  {
    id: 4,
    delay: 350,
    bgColor: "bg-quaternary bg-opacity-40",
    icon: React.createElement(FeatureFourSvg),
    title: "All Integrations",
    description: `Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                    Mauris blandit aliquet elit, eget tincidunt pulvinar a.
                    Curabitur aliquet quam id dui posuere`,
  },
];
