import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 992px) { ... }

      xl: "1280px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      backgroundColor: {
        'white': 'rgba(255, 255, 255, 1)', // Set your custom background color and opacity here
        'custom-blue': 'rgba(115, 177, 255, 0.1)',
        'custom-red': 'hsla(5, 93%, 76%, 0.1)',
        'theme-light': 'rgba(243, 240, 240, var(--tw-bg-opacity))',
      },
      fontFamily: {
        'secondary': ['Merriweather', 'sans-serif'],
        'primary': ['Maven Pro', 'sans-serif'],
      },
      boxShadow: {
        'default': '0 15px 60px rgba(0, 0, 0, .06)',
      },
      content:{
        'wama':'url("/images/logo/logo.png")',
      },
     colors: {
      current: "currentColor",
      transparent: "transparent",
      black: "#222222",
      davy_grey: "#555555",
      yellow_tan: "#FDE179",
      seafoam_blue: "#73CFA8",
      dark_jungle_green: "#222222",
      crystal_blue: "#73B1FF",
      white: "#FFFFFF",
      quaternary:"#FDE077",
      geraldine: "#FB9289",
      dark : "rgb(34 34 34 / 1)",
      

     }

    },
  },
  plugins: [],
};
export default config;
