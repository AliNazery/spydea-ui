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
    variants: {
      extend: {
        padding: ['responsive'], // Enable responsive padding utilities
      },
    },
    extend: {
      backgroundImage: {
        'dotted-line': "url('data:image/svg+xml,%3Csvg width='1px' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%23F96D61' stroke-width='2' stroke-dasharray='6, 14' stroke-dashoffset='0' stroke-linecap='square'/%3E%3C/svg%3E')",
      },
      height: {
        '140p': '140%', // 140% height for the after element
      },
      clipPath: {
        'custom-shape': 'polygon(0 -1%, 100% 0, 100% 85%, 0 45%)',
      },
      transitionProperty: {
        'padding': 'padding',
        'header': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(.4,0,.2,1)',
      },
      transitionDuration: {
        '200': '0.2s',
      },
      spacing:{
        'gutter-x': 'var(--bs-gutter-x)',
        'gutter-y': 'var(--bs-gutter-y)',
      },
      backgroundColor: {
        'white': 'rgba(255, 255, 255, 1)', // Set your custom background color and opacity here
        'custom-blue': 'rgba(115, 177, 255, 0.1)',
        'custom-red': 'hsla(5, 93%, 76%, 0.1)',
        'theme-light': 'rgba(243, 240, 240, var(--tw-bg-opacity))',
        'theme-dark': 'rgba(0, 0, 0, var(--tw-bg-opacity))',
        'quote': '#f4fdff',
      },
      fontFamily: {
        'secondary': ['Merriweather', 'sans-serif'],
        'primary': ['Maven Pro', 'sans-serif'],
        'merriweather': ['Merriweather', 'sans-serif'],
      },
      boxShadow: {
        'default': '0 15px 60px rgba(0, 0, 0, .06)',
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1), 4px 0 6px rgba(0, 0, 0, 0.1), -4px 0 6px rgba(0, 0, 0, 0.1)',
        'custom-soft': '0 2px 4px rgba(0, 0, 0, 0.05), 0 -2px 4px rgba(0, 0, 0, 0.05), 2px 0 4px rgba(0, 0, 0, 0.05), -2px 0 4px rgba(0, 0, 0, 0.05)',
      },
      content:{
        'wama':'url("/images/logo/logo.png")',
      },
      width: {
        '130px': '130px',
        'col-10': '83.33333333333334%',
        'col-6':'50%'
      },
     colors: {
      current: "currentColor",
      transparent: "transparent",
      black: "#222222",
      davy_grey: "#555555",
      yellow_tan: "#FDE179",
      seafoam_blue: "#73CFA8",
      crystal_blue: "#73B1FF",
      white: "#FFFFFF",
      quaternary:"#FDE077",
      geraldine: "#FB9289",
      dark : "rgb(34 34 34 / 1)",
      greyQ:"#000000",
      borderLeft:"#909090",
      tertiary:"#FB9289", 
      secondary:"#73CFA8",
      quinary:"#73B1FF",
      aboutbg:"#FFF9E4",
      abphoto:"#F9FAFB",
      borderColor:"#F9FAFB",
      

     }

    },
  },
  variants: {
    extend: {
      backgroundColor: ['after'],
      zIndex: ['after'],
      clipPath: ['after'],
      content: ['after'],
      position: ['after'],
      inset: ['after'],
      height: ['after'],
      width: ['after'],
      backgroundImage: ['after'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.after-dotted-line': {
          '&::after': {
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'1px\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'none\' stroke=\'%23F96D61\' stroke-width=\'2\' stroke-dasharray=\'6, 14\' stroke-dashoffset=\'0\' stroke-linecap=\'square\'/%3E%3C/svg%3E')",
            content: "''",
            position: 'absolute',
            left: '0',
            top: '50%',
            height: '140%',
            width: '1px',
            transform: 'translateY(-50%)',
          },
        },
      }, ['responsive']);
    },
    require('@tailwindcss/forms'),
    require('tailwindcss-pseudo-elements')({
      customPseudoClasses: [],
      customPseudoElements: ['after', 'before'],
      contentUtilities: true,
      emptyContent: true,
      classNameReplacer: {
        'after': 'after',
        'before': 'before',
      },
    }),
  ],
};
export default config;
